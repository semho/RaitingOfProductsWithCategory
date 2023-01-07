import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist';
import { TopPageController } from './top-page.controller';

@Module({
  imports: [ConfigModule],
  controllers: [TopPageController],
})
export class TopPageModule {}
