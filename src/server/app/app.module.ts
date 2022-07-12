import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { LangModule } from '@server/api/lang/lang.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot(), LangModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
