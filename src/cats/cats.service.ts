
import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  async create(cat: Cat) {
    this.cats.push(cat);
    return cat
  }

  async findAll(): Promise<Cat[]> {
    return this.cats;
  }
}
