import { Controller, Get } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UserService) {}

  @Get()
  getUsers(): string {
    return this.service.getUsers();
  }
}
