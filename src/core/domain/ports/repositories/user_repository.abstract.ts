// --------------------------------
// Requirements
// --------------------------------

import { UID } from '../../value_objects/types';
import { UserEntity } from '../../entities/user.entity';
import { UserCreateModel } from '../../models/user_create.model';
import { UserUpdateModel } from '../../models/user_update.model';

// --------------------------------
// Helpers
// --------------------------------

abstract class BaseUserRepository {
  abstract getUserOrFail(uid: UID): Promise<UserEntity>;
  abstract get(): Promise<UserEntity[]>;
  abstract create(createModel: UserCreateModel): Promise<void>;
  abstract update(updateModel: UserUpdateModel): Promise<UserEntity>;
  abstract delete(uid: UID): Promise<void>;
  abstract verifyToken(token: string): Promise<UID>;
}

// --------------------------------
// Public Interface
// --------------------------------

export { BaseUserRepository };
