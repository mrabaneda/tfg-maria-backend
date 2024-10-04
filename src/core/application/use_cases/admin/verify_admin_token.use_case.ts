// --------------------------------
// Requirements
// --------------------------------

import { Injectable } from '@nestjs/common';
import { UID } from 'src/core/domain/value_objects/types';
import { BaseAdminUserService } from 'src/core/domain/ports/services/admin_user.service';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class VerifyAdminTokenUseCase {
  constructor(private readonly adminUserService: BaseAdminUserService) {}

  async execute(token: string): Promise<UID> {
    return await this.adminUserService.verifyToken(token);
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { VerifyAdminTokenUseCase };
