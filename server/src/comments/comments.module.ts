import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import { CommentsController } from './controllers/comments.controller';
import { CommentsService } from './services/comments.service';
import { UsersService } from 'src/users/services/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([Comment, User])],
  providers: [CommentsService, UsersService],
  controllers: [CommentsController],
})
export class CommentsModule { }