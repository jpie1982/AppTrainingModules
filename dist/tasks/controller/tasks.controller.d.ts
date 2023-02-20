import { TaskService } from '../services/task.service';
export declare class TasksController {
    private readonly service;
    constructor(service: TaskService);
    getTask(): string;
}
