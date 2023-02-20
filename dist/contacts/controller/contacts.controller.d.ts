import { ContactService } from '../services/contact.service';
export declare class ContactsController {
    private readonly service;
    constructor(service: ContactService);
    getContact(): string;
}
