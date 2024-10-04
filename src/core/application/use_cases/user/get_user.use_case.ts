// --------------------------------
// Requirements
// --------------------------------

import { Injectable } from '@nestjs/common';
import { UID } from 'src/core/domain/value_objects/types';
import { UserEntity } from 'src/core/domain/entities/user.entity';
import { BaseUserService } from 'src/core/domain/ports/services/user_service.abstract';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class GetUserUseCase {
  constructor(private readonly userService: BaseUserService) {}

  async execute(uid: UID): Promise<UserEntity> {
    return await this.userService.getUserOrFail(uid);
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { GetUserUseCase };
