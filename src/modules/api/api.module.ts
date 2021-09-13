import { Module } from '@nestjs/common'
import { apiController } from './api.controller'

@Module({
  controllers: [apiController],
})
export class apiModule {}