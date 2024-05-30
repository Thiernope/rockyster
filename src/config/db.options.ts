import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';

@Injectable()
export class DbOptions implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}
  getEnvironment(): string {
    const env = this.configService.get<string>('STAGE');
    return env;
  }

  isDevelopment(): boolean {
    return this.getEnvironment() === 'dev';
  }

  isProduction(): boolean {
    return this.getEnvironment() === 'prod';
  }

  createTypeOrmOptions(): DataSourceOptions {
    const isProduction = this.isProduction();
    return {
      type: 'postgres',
      host: isProduction
        ? this.configService.get<string>('PROD_HOST')
        : this.configService.get<string>('DEV_HOST'),
      port: isProduction
        ? +this.configService.get<number>('PROD_PORT')
        : +this.configService.get<number>('DEV_PORT'),
      username: isProduction
        ? this.configService.get<string>('PROD_DB_USERNAME')
        : this.configService.get<string>('DEV_DB_USERNAME'),
      database: isProduction
        ? this.configService.get<string>('PROD_DATABASE')
        : this.configService.get<string>('DEV_DATABASE'),
      password: isProduction
        ? this.configService.get<string>('PROD_DB_PASSWORD')
        : this.configService.get<string>('DEV_DB_PASSWORD'),
      entities: ['dist/**/*.entity.js'],
      migrations: ['dist/db/migrations/*.js'],
      synchronize: !isProduction,
    };
  }
}
