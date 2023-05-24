import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    description: 'Product Title',
    uniqueItems: true,
    example: 'Game action',
  })
  @IsString()
  @MinLength(1)
  title: string;

  @ApiProperty({
    description: 'Product price',
    example: 123.12,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @ApiProperty({
    description: 'Product description',
    example: 'Toy for everithing age',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'Slug for URL product',
    example: 'action-game',
  })
  @IsString()
  @IsOptional()
  slug?: string;

  @ApiProperty({
    description: 'Product stock',
    example: 12,
  })
  @IsInt()
  @IsPositive()
  @IsOptional()
  stock?: number;

  @ApiProperty({
    description: '¿Is product active?',
    example: true,
  })
  @IsBoolean()
  @IsOptional()
  active?: boolean;

  @IsString()
  @IsOptional()
  date_create?: string;

  @IsString({ each: true })
  @IsOptional()
  @IsArray()
  sizes?: string[];

  @IsString()
  @IsOptional()
  gender?: string;
  // @IsIn(['men', 'women', 'kid', 'unisex'])
  // gender: string;
}
