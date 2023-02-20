import { Controller, Get } from '@nestjs/common';
import { TaskService } from '../services/task.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly service: TaskService) {}

  @Get()
  getTask(): string {
    return this.service.getTask();
  }
}
