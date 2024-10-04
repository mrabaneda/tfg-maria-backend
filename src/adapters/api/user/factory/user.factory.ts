// --------------------------------
// Requirements
// --------------------------------

import { UserEntity } from 'src/core/domain/entities/user.entity';
import { UserCreateModel } from 'src/core/domain/models/user_create.model';
import { UserDto } from '../dtos/user.dto';
import { UserCreateDto } from '../dtos/user_create.dto';

// --------------------------------
// Helpers
// --------------------------------

class UserFactory {
  static userEntityToDto(userEntity: UserEntity): UserDto {
    return {
      userId: userEntity.userId,
      email: userEntity.email,
      name: userEntity.name,
      createdAt: userEntity.createdAt,
      photoUrl: userEntity.photoUrl,
      updatedAt: userEntity.updatedAt,
      preference: userEntity.preference,
    };
  }

  static createUserDtoToModel(dto: UserCreateDto): UserCreateModel {
    return {
      email: dto.email,
      name: dto.name,
      password: dto.password,
      photoUrl: dto.photoUrl,
      preference: dto.preference,
    };
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { UserFactory };
