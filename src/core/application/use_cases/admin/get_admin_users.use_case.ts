// --------------------------------
// Requirements
// --------------------------------

import { Injectable } from '@nestjs/common';
import { AdminUserEntity } from 'src/core/domain/entities/admin_user.entity';
import { BaseAdminUserService } from 'src/core/domain/ports/services/admin_user.service';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class GetAdminUsersUseCase {
  constructor(private readonly adminUserService: BaseAdminUserService) {}

  async execute(): Promise<AdminUserEntity[]> {
    return await this.adminUserService.getAdminUsers();
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { GetAdminUsersUseCase };
