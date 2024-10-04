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
class VerifyUserTokenUseCase {
  constructor(private readonly adminUserService: BaseUserService) {}

  async execute(token: string): Promise<UID> {
    return await this.adminUserService.verifyToken(token);
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { VerifyUserTokenUseCase };
