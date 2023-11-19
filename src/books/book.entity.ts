/* eslint-disable prettier/prettier */
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Book {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  author: string;
  
  // ฟิลด์อื่นๆ ถ้ามี
}
