// --------------------------------
// Requirements
// --------------------------------

import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/core/domain/entities/user.entity';
import { BaseUserService } from 'src/core/domain/ports/services/user_service.abstract';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class GetUsersUseCase {
  constructor(private readonly userService: BaseUserService) {}

  async execute(): Promise<UserEntity[]> {
    return await this.userService.getUsers();
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { GetUsersUseCase };
