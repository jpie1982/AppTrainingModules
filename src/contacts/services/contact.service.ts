import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactService {
  getContact(): string {
    return 'Hola desde el servicio de Contacts';
  }
}
