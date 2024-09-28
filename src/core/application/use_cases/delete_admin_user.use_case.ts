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
class DeleteAdminUserUseCase {
  constructor(private readonly adminUserService: BaseAdminUserService) {}

  async execute(uid: UID): Promise<void> {
    return await this.adminUserService.deleteAdminUser(uid);
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { DeleteAdminUserUseCase };
