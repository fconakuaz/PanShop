import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Auth } from './entities/auth.entity';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get()
  @ApiResponse({
    status: 201,
    description: 'API Key generated',
    type: Auth,
  })
  generateApiKey(): string {
    return this.authService.generateApiKey();
  }
}
