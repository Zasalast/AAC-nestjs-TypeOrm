import { Get, Controller } from '@nestjs/common';

@Controller('Agenda')
export class AppController {
  @Get()
  root(): string {
    return 'Hello World!';
  }
}