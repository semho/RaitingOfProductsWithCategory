import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist';
import { TypegooseModule } from 'nestjs-typegoose';
import { TopPageController } from './top-page.controller';
import { TopPageModel } from './top-page.model';

@Module({
  imports: [
    ConfigModule,
    TypegooseModule.forFeature([
      {
        typegooseClass: TopPageModel,
        schemaOptions: {
          collection: 'TopPage',
        },
      },
    ]),
  ],
  controllers: [TopPageController],
})
export class TopPageModule {}
