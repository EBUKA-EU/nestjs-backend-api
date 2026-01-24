import { MongooseModule } from '@nestjs/mongoose';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InterpretersModule } from './interpreters/interpreters.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ugwuchukwuebuka999_db_user:120896%40UEEServices@cluster0.8ijjebb.mongodb.net/language_localization',
    ),
    InterpretersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
