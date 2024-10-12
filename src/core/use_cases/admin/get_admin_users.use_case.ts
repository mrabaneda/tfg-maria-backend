// --------------------------------
// Requirements
// --------------------------------

import { Injectable } from '@nestjs/common';
import { AdminUserEntity } from 'src/core/domain/entities/admin_user.entity';
import { BaseAdminUserRepository } from 'src/core/domain/ports/repositories/admin_user.repository.';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class GetAdminUsersUseCase {
  constructor(private readonly adminUserRepository: BaseAdminUserRepository) {}

  async execute(): Promise<AdminUserEntity[]> {
    return await this.adminUserRepository.get();
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { GetAdminUsersUseCase };
