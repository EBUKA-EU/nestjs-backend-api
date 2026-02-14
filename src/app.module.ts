import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InterpretersModule } from './interpreters/interpreters.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const uri = config.get<string>('DATABASE_URL');
        if (!uri) {
          throw new Error("DATABASE_URL is not defined in environment variables");
        }

        return { uri };
      },
    }),

    AuthModule,
    InterpretersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}