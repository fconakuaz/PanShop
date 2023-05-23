import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  private readonly logger = new Logger('ProductsService');
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const product = this.productRepository.create(createProductDto);
      await this.productRepository.save(product);
      return product;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAll() {
    try {
      const product = await this.productRepository.find();
      return product;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findOne(id: string) {
    try {
      const product = await this.productRepository.findOneBy({ id });
      return product;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    try {
      const product = await this.productRepository.preload({
        id: id,
        ...updateProductDto,
      });
      if (!product)
        throw new NotFoundException(`Product with id: ${id} not found`);
      return await this.productRepository.save(product);
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async remove(id: string) {
    try {
      const product = await this.productRepository.delete({ id });
      return product;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  private handleExceptions(error: any) {
    this.logger.error(error.detail);
    throw new BadRequestException(error.detail);
  }
}
