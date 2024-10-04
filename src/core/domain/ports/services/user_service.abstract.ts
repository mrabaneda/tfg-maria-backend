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

abstract class BaseUserService {
  abstract getUserOrFail(uid: UID): Promise<UserEntity>;
  abstract getUsers(): Promise<UserEntity[]>;
  abstract createUser(createModel: UserCreateModel): Promise<void>;
  abstract updateUser(updateModel: UserUpdateModel): Promise<UserEntity>;
  abstract deleteUser(uid: UID): Promise<void>;
  abstract verifyToken(token: string): Promise<UID>;
}

// --------------------------------
// Public Interface
// --------------------------------

export { BaseUserService };
