import { Body, Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserDto } from '@server-template/dtos';
import { UserService } from './user.service';
import { MICROSERVICE_NAME } from '../../config';
import { User } from '@server-template/prisma';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern(`${MICROSERVICE_NAME}.user.create`)
  async createUser(@Body() user: CreateUserDto): Promise<User> {
    return this.userService.createUser(user);
  }
}
