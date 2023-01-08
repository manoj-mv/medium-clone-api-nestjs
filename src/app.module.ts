import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagModule } from './tag/tag.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './ormconfig';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TagModule,
    UserModule,
    TypeOrmModule.forRoot(config)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
