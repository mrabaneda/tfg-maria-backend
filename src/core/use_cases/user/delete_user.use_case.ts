// --------------------------------
// Requirements
// --------------------------------

import { Injectable } from '@nestjs/common';
import { UID } from 'src/core/domain/value_objects/types';
import { BaseUserRepository } from 'src/core/domain/ports/repositories/user.repository';
import { BaseLoginRepository } from 'src/core/domain/ports/repositories/login.repository';
import { BaseAuthService } from 'src/core/domain/ports/services/auth.service.';
import { BaseStorageService } from 'src/core/domain/ports/services/storage.service';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class DeleteUserUseCase {
  constructor(
    private readonly userRepository: BaseUserRepository,
    private readonly loginRepository: BaseLoginRepository,
    private readonly authService: BaseAuthService,
    private readonly storageService: BaseStorageService,
  ) {}

  async execute(uid: UID): Promise<void> {
    const loginEntity = await this.loginRepository.getOneOrFail(uid);

    await this.authService.delete(uid);

    await Promise.all([
      this.storageService.delete(`${loginEntity.photoRelativePath}/${loginEntity.photoName}`),
      ...loginEntity.passwordModel.map((passwordModel) =>
        this.storageService.delete(`${passwordModel.photoRelativePath}/${passwordModel.photoName}`),
      ),
    ]);

    await Promise.all([this.loginRepository.delete(uid), this.userRepository.delete(uid)]);
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { DeleteUserUseCase };
