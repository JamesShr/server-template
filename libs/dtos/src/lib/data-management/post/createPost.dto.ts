import { IsNotEmpty, IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  title!: string;

  @IsString()
  content!: string;

  @IsBoolean()
  published!: boolean;

  @IsNumber()
  authorId!: number;
}
