import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  getTask(): string {
    return 'Hola desde el servicio de Tasks';
  }
}
