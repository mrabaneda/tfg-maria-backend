// --------------------------------
// Requirements
// --------------------------------

import { Injectable } from '@nestjs/common';
import { AdminUserEntity } from 'src/core/domain/entities/admin_user.entity';
import { BaseAdminUserService } from 'src/core/domain/ports/services/admin_user.service';
import { UID } from 'src/core/domain/value_objects/types';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class GetAdminUserUseCase {
  constructor(private readonly adminUserService: BaseAdminUserService) {}

  async execute(uid: UID): Promise<AdminUserEntity> {
    return await this.adminUserService.getAdminUserOrFail(uid);
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { GetAdminUserUseCase };
