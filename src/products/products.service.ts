import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findOne(id: number): Promise<Product> {
    return this.productRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.productRepository.delete(id);
  }

  create(data: Partial<Product>): Promise<Product> {
    const newProduct = this.productRepository.create(data);
    return this.productRepository.save(newProduct);
  }

  update(id: number, data: Partial<Product>): Promise<Product> {
    return this.productRepository.save({ ...data, id });
  }
}
