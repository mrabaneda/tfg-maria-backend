// --------------------------------
// Requirements
// --------------------------------

import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { AdminUserCreatePartialModel } from 'src/core/domain/models/admin_user_create_partial.model';
import { BaseAdminUserRepository } from 'src/core/domain/ports/repositories/admin_user.repository.';
import { BaseAuthService } from 'src/core/domain/ports/services/auth.service.';
import { BaseStorageService } from 'src/core/domain/ports/services/storage.service';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class CreateAdminUserUseCase {
  constructor(
    private readonly adminUserRepository: BaseAdminUserRepository,
    private readonly storageService: BaseStorageService,
    private readonly authService: BaseAuthService,
  ) {}

  async execute(createModel: AdminUserCreatePartialModel): Promise<void> {
    const photoName = `${randomUUID()}${createModel.imageExtension}`;

    const photoUrl = await this.storageService.upload(createModel.imageBuffer, `admin_user_images/${photoName}`);

    const uid = await this.authService.create({
      name: createModel.name,
      password: createModel.password,
      email: createModel.email,
      isAdmin: true,
      photoUrl: photoUrl,
    });

    await this.adminUserRepository.create({
      name: createModel.name,
      email: createModel.email,
      photoName: photoName,
      photoRelativePath: 'admin_user_images',
      photoUrl: photoUrl,
      uid: uid,
    });
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { CreateAdminUserUseCase };
