// --------------------------------
// Requirements
// --------------------------------

import { Injectable } from '@nestjs/common';
import { UID } from '../../../core/domain/value_objects/types';
import { UserEntity } from '../../../core/domain/entities/user.entity';
import { UserUpdateModel } from 'src/core/domain/models/user_update.model';
import { UserCreateModel } from '../../../core/domain/models/user_create.model';
import { BaseUserRepository } from '../../../core/domain/ports/repositories/user_repository.abstract';
import { BaseUserService } from '../../../core/domain/ports/services/user_service.abstract';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class UserService implements BaseUserService {
  constructor(private readonly userRepository: BaseUserRepository) {}

  getUserOrFail(uid: UID): Promise<UserEntity> {
    return this.getUserOrFail(uid);
  }

  getUsers(): Promise<UserEntity[]> {
    return this.userRepository.get();
  }

  createUser(createModel: UserCreateModel): Promise<void> {
    return this.userRepository.create(createModel);
  }

  updateUser(updateModel: UserUpdateModel): Promise<UserEntity> {
    return this.userRepository.update(updateModel);
  }

  deleteUser(uid: UID): Promise<void> {
    return this.userRepository.delete(uid);
  }

  verifyToken(token: string): Promise<UID> {
    return this.userRepository.verifyToken(token);
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { UserService };
