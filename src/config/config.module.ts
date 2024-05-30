import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbOptions } from './db.options';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.STAGE}` || 'dev',
    }),
  ],
  providers: [DbOptions],
  exports: [DbOptions],
})
export class DatabaseModule {}
