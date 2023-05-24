import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AuthService {
  generateApiKey(): string {
    // Generar una nueva API Key utilizando UUID v4
    return uuid();
  }
}
