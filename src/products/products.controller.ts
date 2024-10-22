import { Controller, Get, Post, Param, Body, Delete, Put } from '@nestjs/common';
import { ProductService } from './products.service';
import { Product } from './product/product.entity';


@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Product> {
    return this.productService.findOne(id);
  }

  @Post()
  create(@Body() productData: Partial<Product>): Promise<Product> {
    return this.productService.create(productData);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() productData: Partial<Product>): Promise<Product> {
    return this.productService.update(id, productData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.productService.remove(id);
  }
}
