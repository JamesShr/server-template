import { Injectable } from '@nestjs/common';
import {
  DataManagementPrismaClientService,
  Post,
} from '@server-template/prisma';
import { CreatePostDto } from '@server-template/dtos';

@Injectable()
export class PostService {
  constructor(private readonly prisma: DataManagementPrismaClientService) {}

  async createPost(post: CreatePostDto): Promise<Post> {
    return this.prisma.post.create({ data: post });
  }

  async getPost(id: number): Promise<Post | null> {
    return this.prisma.post.findUnique({ where: { id } });
  }

  async updatePost(id: number, post: Post): Promise<Post> {
    return this.prisma.post.update({ where: { id }, data: post });
  }

  async deletePost(id: number): Promise<Post> {
    return this.prisma.post.delete({ where: { id } });
  }

  async getAllPosts(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }
}
