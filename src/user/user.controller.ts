import {
  Controller,
  Get,
  Patch,
  Req,
  UseGuards,
  Body,
  Post,
} from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { PrismaService } from 'src/prisma/prisma.service';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('getUser')
  getUser(@GetUser() user: User) {
    return user;
  }

  //function to update user fields
  @Post('editUser')
  async editUser(@GetUser() user: User, @Body() data: Prisma.UserUpdateInput) {
    console.log('Update User data');
    console.log(data);
    console.log(data.Name);
    console.log('Pre-existing User');
    console.log(user);

    const updatedUser = await this.prisma.user.update({
      where: { ID: user.ID },
      data: data,
    });
    return updatedUser;
  }
}
