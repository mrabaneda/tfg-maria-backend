// --------------------------------
// Requirements
// --------------------------------

import { Injectable } from '@nestjs/common';
import { AdminUserCreateModel } from 'src/core/domain/models/admin_user_create.model';
import { BaseAdminUserService } from 'src/core/domain/ports/services/admin_user.service';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class CreateAdminUserUseCase {
  constructor(private readonly adminUserService: BaseAdminUserService) {}

  async execute(createModel: AdminUserCreateModel): Promise<void> {
    return await this.adminUserService.createAdminUser(createModel);
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { CreateAdminUserUseCase };
