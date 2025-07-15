import { Injectable } from '@nestjs/common';
import {
  DataManagementPrismaClientService,
  User,
} from '@server-template/prisma';
import { CreateUserDto } from '@server-template/dtos';

@Injectable()
export class UserService {
  constructor(private readonly prisma: DataManagementPrismaClientService) {}

  async createUser(user: CreateUserDto): Promise<User> {
    return this.prisma.user.create({ data: user });
  }

  async getUser(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async updateUser(id: number, user: User): Promise<User> {
    return this.prisma.user.update({ where: { id }, data: user });
  }

  async deleteUser(id: number): Promise<User> {
    return this.prisma.user.delete({ where: { id } });
  }

  async getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
}
