/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// * src/books/books.resolver.ts
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Book } from './book.entity';
import { BookService } from './book.service';
// * nest g resolver books

@Resolver(of => Book)
export class BooksResolver {
  constructor(private bookService: BookService) {}

  @Query(returns => [Book])
  async books() {
    return this.bookService.findAll();
  }

  @Query(returns => Book)
  async book(@Args('id', { type: () => String }) id: string) {
    return this.bookService.findOne(id);
  }

  @Mutation(returns => Book)
  async addBook(
    @Args('title') title: string,
    @Args('author') author: string
  ) {
    return this.bookService.addBook(title, author);
  }

  @Mutation(returns => Book)
  async deleteBook(@Args('id', { type: () => String })id: string) {
    return this.bookService.deleteBook(id);
  }

  @Mutation(returns => Book)
  async updateBook(
    @Args('id', {type: () => String}) id: string,
    @Args({ name: 'title', type: () => String, nullable: true }) title: string,
    @Args({ name: 'author', type: () => String, nullable: true }) author: string
  ) {
    return this.bookService.updateBook(id, title, author);
  }
}
