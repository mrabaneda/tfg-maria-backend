// --------------------------------
// Requirements
// --------------------------------

import { Injectable } from '@nestjs/common';
import { UID } from 'src/core/domain/value_objects/types';
import { BaseUserService } from 'src/core/domain/ports/services/user_service.abstract';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class DeleteUserUseCase {
  constructor(private readonly userService: BaseUserService) {}

  async execute(uid: UID): Promise<void> {
    return await this.userService.deleteUser(uid);
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { DeleteUserUseCase };
