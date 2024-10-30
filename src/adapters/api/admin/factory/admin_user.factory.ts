// --------------------------------
// Requirements
// --------------------------------

import { AdminUserCreateDto } from '../dtos/admin_user_create.dto';
import { AdminUserEntity } from 'src/core/domain/entities/admin_user.entity';
import { AdminUserDto } from '../dtos/admin_user.dto';
import { AdminUserCreatePartialModel } from 'src/core/domain/models/admin_user_create_partial.model';
import { extname } from 'path';

// --------------------------------
// Helpers
// --------------------------------

class AdminUserFactory {
  static adminUserEntityToDto(adminUserEntity: AdminUserEntity): AdminUserDto {
    return {
      uid: adminUserEntity.uid,
      email: adminUserEntity.email,
      name: adminUserEntity.name,
      photoUrl: adminUserEntity.photoUrl,
    };
  }

  static createAdminUserDtoToModel(file: Express.Multer.File, dto: AdminUserCreateDto): AdminUserCreatePartialModel {
    return {
      email: dto.email,
      name: dto.name,
      password: dto.password,
      imageBuffer: file.buffer,
      imageExtension: extname(file.originalname),
    };
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { AdminUserFactory };
