import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getHello(): string {
    const message = this.configService.get<string>('MESSAGE') || 'Hello World!';
    if (!this.configService.get<string>('MESSAGE')) {
      console.warn('MESSAGE environment variable is not set, using default value');
    }
    
    return message;
  }
} 