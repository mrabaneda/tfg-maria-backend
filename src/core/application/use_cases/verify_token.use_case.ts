// --------------------------------
// Requirements
// --------------------------------

import { Injectable } from '@nestjs/common';
import { BaseAdminUserService } from 'src/core/domain/ports/services/admin_user.service';
import { UID } from 'src/core/domain/value_objects/types';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class VerifyTokenUseCase {
  constructor(private readonly adminUserService: BaseAdminUserService) {}

  async execute(token: string): Promise<UID> {
    return await this.adminUserService.verifyToken(token);
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { VerifyTokenUseCase };
