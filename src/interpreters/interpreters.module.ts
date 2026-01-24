import { Module } from '@nestjs/common';
import { InterpretersController } from './interpreters.controller';
import { InterpretersService } from './interpreters.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Interpreter, InterpreterSchema } from './interpreter.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Interpreter.name, schema: InterpreterSchema},
    ])
  ],
  controllers: [InterpretersController],
  providers: [InterpretersService]
})
export class InterpretersModule {}
