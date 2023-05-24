import { ApiProperty } from '@nestjs/swagger';
import { PrimaryGeneratedColumn } from 'typeorm';
export class Auth {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({
    example: '8339433E-F36B-1410-8E88-001B7C49B22D',
    description: 'API Key',
    uniqueItems: true,
  })
  API_KEY: string;
}
