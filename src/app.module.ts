import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BooksResolver } from './books/books.resolver';
import { BookService } from './books/book.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'graphql.gql',
    }),
    // * โมดูลอื่นๆ ที่จำเป็น
  ],
  controllers: [],
  providers: [BooksResolver, BookService],
})
export class AppModule {}
