import {
  Controller,
  Get,
  Patch,
  Req,
  UseGuards,
  Body,
  Post,
  Delete,
} from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(JwtGuard)
@Controller('users')
@ApiTags('users')
export class UserController {
  constructor(
    private readonly prisma: PrismaService,
    private userService: UserService,
  ) {}

  //function to get all users
  @Get('getAllUsers')
  async getAllUsers() {
    return await this.prisma.user.findMany();
  }

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

    // const updatedUser = await this.prisma.user.update({
    //   where: { ID: user.ID },
    //   data: data,
    // });
    // return updatedUser
    return await this.userService.updateUser(user.ID, data);
  }

  // New function to delete a user
  @Delete('deleteUser')
  async deleteUser(@GetUser() user: User) {
    console.log('Delete User');
    console.log('Pre-existing User');
    console.log(user);

    // const deletedUser = await this.prisma.user.delete({
    //   where: { ID: user.ID },
    // });
    // return deletedUser;
    return await this.userService.deleteUser(user.ID);
  }
}
