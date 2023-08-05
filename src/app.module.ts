import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [BoardModule, TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
