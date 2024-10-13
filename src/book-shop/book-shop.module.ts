import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookShopService } from './book-shop.service';
import { BookShopController } from './book-shop.controller';
import { Book } from '../entity/book.entity';
import { Author } from '../entity/author.entity';
import { Comment } from '../entity/comment.entity';
import { User } from '../entity/user.entity';
import { Shop } from '../entity/book_shop.entity';
import { Publisher } from '../entity/publisher.entity';
import { Serie } from '../entity/serie.entity';
import { Voting } from '../entity/voting.entity';
import { History } from '../entity/history.entity';
import { Favorite } from '../entity/favorite.entity';
import { Forum } from '../entity/forum.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Book, Author, Comment, User, Shop, Publisher, Serie, Voting, History, Favorite, Forum]),
      ],
      providers: [BookShopService],
      controllers: [BookShopController],
})
export class BookShopModule {}
