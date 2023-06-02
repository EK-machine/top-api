import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TopPageModule } from './top-page/top-page.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.model';
import { ReviewController } from './review/review.controller';

@Module({
  imports: [AuthModule, TopPageModule, ProductModule, ReviewModule],
  controllers: [AppController, ReviewController],
  providers: [AppService],
})
export class AppModule { }
