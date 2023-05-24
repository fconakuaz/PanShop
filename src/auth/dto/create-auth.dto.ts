import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';
export class CreateAuthDto {
  @ApiProperty({
    description: 'API Key UUID',
    uniqueItems: true,
    example: '8339433E-F36B-1410-8E88-001B7C49B22D',
  })
  @IsString()
  @MinLength(1)
  title: string;
}
