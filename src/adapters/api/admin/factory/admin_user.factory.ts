// --------------------------------
// Requirements
// --------------------------------

import { AdminUserCreateModel } from 'src/core/domain/models/admin_user_create.model';
import { AdminUserCreateDto } from '../dtos/admin_user_create.dto';
import { AdminUserEntity } from 'src/core/domain/entities/admin_user.entity';
import { AdminUserDto } from '../dtos/admin_user.dto';

// --------------------------------
// Helpers
// --------------------------------

class AdminUserFactory {
  static adminUserEntityToDto(adminUserEntity: AdminUserEntity): AdminUserDto {
    return {
      email: adminUserEntity.email,
      createdAt: adminUserEntity.createdAt,
      isAdmin: adminUserEntity.isAdmin,
      name: adminUserEntity.name,
      photoUrl: adminUserEntity.photoUrl,
      updatedAt: adminUserEntity.updatedAt,
      userId: adminUserEntity.userId,
    };
  }

  static createAdminUserDtoToModel(dto: AdminUserCreateDto): AdminUserCreateModel {
    return {
      email: dto.email,
      name: dto.name,
      password: dto.password,
      photoUrl: dto.photoUrl,
    };
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { AdminUserFactory };
