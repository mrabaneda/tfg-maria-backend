// --------------------------------
// Requirements
// --------------------------------

import { Injectable } from '@nestjs/common';
import { UserCreateModel } from 'src/core/domain/models/user_create.model';
import { BaseUserService } from 'src/core/domain/ports/services/user_service.abstract';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class CreateUserUseCase {
  constructor(private readonly userService: BaseUserService) {}

  async execute(createModel: UserCreateModel): Promise<void> {
    return await this.userService.createUser(createModel);
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { CreateUserUseCase };
