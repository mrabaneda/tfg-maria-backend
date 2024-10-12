// --------------------------------
// Requirements
// --------------------------------

import { Injectable } from '@nestjs/common';
import { BaseAdminUserRepository } from 'src/core/domain/ports/repositories/admin_user.repository.';
import { BaseAuthService } from 'src/core/domain/ports/services/auth.service.';
import { BaseStorageService } from 'src/core/domain/ports/services/storage.service';
import { UID } from 'src/core/domain/value_objects/types';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class DeleteAdminUserUseCase {
  constructor(
    private readonly adminUserRepository: BaseAdminUserRepository,
    private readonly storageService: BaseStorageService,
    private readonly authService: BaseAuthService,
  ) {}

  async execute(uid: UID): Promise<void> {
    const adminUserEntity = await this.adminUserRepository.getOneOrFail(uid);

    await this.authService.delete(uid);

    await this.storageService.delete(`${adminUserEntity.photoRelativePath}/${adminUserEntity.photoName}`);

    await this.adminUserRepository.delete(uid);
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { DeleteAdminUserUseCase };
