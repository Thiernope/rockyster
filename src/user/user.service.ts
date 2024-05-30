import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor() {}

  findAll() {
    return 'These are all users....';
  }
}
