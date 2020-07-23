import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Post as PostSchema } from './post.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { CreatePostDto } from './dtos/create-post.dto';
import { UpdatePostDto } from './dtos/update-post.dto';

@Injectable()
export class PostsService {
  constructor(@InjectModel(PostSchema) private readonly PostModel: ModelType<PostSchema>) {
  }

  async list() {
    return await this.PostModel.find()
  }

  async create(createPostDto: CreatePostDto) {
    await this.PostModel.create(createPostDto)
  }

  async findById(id: string) {
    return await this.PostModel.findById(id)
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    await this.PostModel.findByIdAndUpdate(id, updatePostDto)
  }

  async deleteById(id: string) {
    await this.PostModel.findByIdAndDelete(id)
  }


}
