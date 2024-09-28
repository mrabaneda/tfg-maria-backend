// --------------------------------
// Requirements
// --------------------------------

import { Injectable } from '@nestjs/common';
import { AdminUserEntity } from 'src/core/domain/entities/admin_user.entity';
import { AdminUserCreateModel } from 'src/core/domain/models/admin_user_create.model';
import { BaseAdminUserRepository } from 'src/core/domain/ports/repositories/admin_user.repository.';
import { BaseAdminUserService } from 'src/core/domain/ports/services/admin_user.service';
import { UID } from 'src/core/domain/value_objects/types';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class AdminUserService implements BaseAdminUserService {
  constructor(private readonly adminUserRepository: BaseAdminUserRepository) {}

  getAdminUserOrFail(uid: UID): Promise<AdminUserEntity> {
    return this.adminUserRepository.getOneOrFail(uid);
  }

  getAdminUsers(): Promise<AdminUserEntity[]> {
    return this.adminUserRepository.get();
  }

  createAdminUser(createModel: AdminUserCreateModel): Promise<void> {
    return this.adminUserRepository.create(createModel);
  }

  deleteAdminUser(uid: UID): Promise<void> {
    return this.adminUserRepository.delete(uid);
  }

  verifyToken(token: string): Promise<UID> {
    return this.adminUserRepository.verifyToken(token);
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { AdminUserService };
