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
class GetAllUsersUseCase {
  constructor(private readonly userService: BaseUserService) {}

  execute(): Promise<UserEntity[]> {
    return this.userService.getAll();
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { GetAllUsersUseCase };
