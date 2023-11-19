/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
// src/books/book.service.ts
import { Injectable } from '@nestjs/common';
import { Book } from './book.entity';

@Injectable()
export class BookService {
  private books: Book[] = []; 

  // * เพิ่มหนังสือ
  addBook(title: string, author: string): Book {
    const book = { id: Date.now().toString(), title, author };
    this.books.push(book);
    return book;
  }

  // * ลบหนังสือ
  deleteBook(id: string): Book {
    const index = this.books.findIndex(book => book.id === id);
    if (index === -1) {
      throw new Error('Book not found');
    }
    return this.books.splice(index, 1)[0];
  }

  // * แก้ไขหนังสือ
  updateBook(id: string, title: string, author: string): Book {
    const book = this.books.find(book => book.id === id);
    if (!book) {
      throw new Error('Book not found');
    }
    book.title = title ?? book.title;
    book.author = author ?? book.author;
    return book;
  }

  // * ค้นหาหนังสือทั้งหมด
  findAll(): Book[] {
    return this.books;
  }

  // * ค้นหาหนังสือตาม id
  findOne(id: string): Book {
    return this.books.find(book => book.id === id);
  }
}
