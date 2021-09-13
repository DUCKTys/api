import { Controller, Get, Query } from '@nestjs/common';
import { nganu } from './nganu';

@Controller('api')
export class apiController {
  @Get()
  findAll(@Query() query): string {
    return nganu(query.data);
  }
}