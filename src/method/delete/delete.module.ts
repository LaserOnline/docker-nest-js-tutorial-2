import { Module } from '@nestjs/common';
import { DeleteController } from './delete.controller';
import { AppService } from 'src/service/app.service';

@Module({
  controllers: [DeleteController],
  providers: [AppService]
})
export class DeleteModule {}
