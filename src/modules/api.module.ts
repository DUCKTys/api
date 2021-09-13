import { Module } from '@nestjs/common'
import { apiModule } from './api/api.module'
@Module({
  imports: [
    apiModule
  ],
})
export class ApiModule {}