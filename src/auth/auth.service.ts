import { ForbiddenException, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  //function to sign in
  async signin(dto: AuthDto) {
    // find the user by email
    const user = await this.prisma.user.findUnique({
      where: {
        Email: dto.email,
      },
    });
    //if user does not exist then throw exception
    if (!user) throw new ForbiddenException('Credentials incorrect');

    //if user exists
    // then check for password
    const valid = await argon.verify(user.Password, dto.password);
    if (!valid) throw new ForbiddenException('Password incorrect');

    delete user.Password;

    // return user;
    return this.signToken(user);
  }

  //function to sign up
  async signup(dto: AuthDto) {
    console.log('dto', dto);
    // Generate the hash
    const hash = await argon.hash(dto.password);

    try {
      const user = await this.prisma.user.create({
        data: {
          ID: dto.id,
          Name: dto.name,
          Email: dto.email,
          Password: hash,
        },
      });

      // return user;
      return this.signToken(user);
    } catch (error) {
      console.error('Error during signup:', error);
      if (error instanceof PrismaClientKnownRequestError) {
        throw new ForbiddenException('Email already exists');
      }
      throw error;
    }
  }

  async signToken(user: User): Promise<{ access_token: string }> {
    const payload = {
      id: user.ID,
      email: user.Email,
    };
    // add expiry time of 15 minutes
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: this.config.get('JWT_SECRET'),
    });
    return {
      access_token: token,
    };
  }
}
