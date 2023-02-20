import { UserService } from '../services/user.service';
export declare class UsersController {
    private readonly service;
    constructor(service: UserService);
    getUsers(): string;
}
