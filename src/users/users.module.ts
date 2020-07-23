import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './users.model';

@Module({
  imports: [
    TypegooseModule.forFeature([User])
  ],
  controllers: [UsersController]
})
export class UsersModule {}
