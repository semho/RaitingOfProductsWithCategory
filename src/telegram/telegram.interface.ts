import { ModuleMetadata } from '@nestjs/common';

export interface ITelegramOptions {
  chatId: string;
  token: string;
}
export interface ITelegramModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  useFactory: (...arg: any[]) => Promise<ITelegramOptions> | ITelegramOptions;
  inject?: any[];
}
