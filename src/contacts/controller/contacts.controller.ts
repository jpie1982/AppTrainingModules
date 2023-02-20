import { Controller, Get } from '@nestjs/common';
import { ContactService } from '../services/contact.service';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly service: ContactService) {}

  @Get()
  getContact(): string {
    return this.service.getContact();
  }
}
