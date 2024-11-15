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
  abstract getOneOrFail(uid: UID): Promise<UserEntity>;
  abstract get(): Promise<UserEntity[]>;
  abstract create(createModel: UserCreateModel): Promise<void>;
  abstract update(updateModel: UserUpdateModel): Promise<void>;
  abstract delete(uid: UID): Promise<void>;
}

// --------------------------------
// Public Interface
// --------------------------------

export { BaseUserRepository };
