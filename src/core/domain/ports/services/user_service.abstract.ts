// --------------------------------
// Requirements
// --------------------------------

import { UserEntity } from '../../entities/user.entity';
import { UserCreateModel } from '../../models/user_create.model';
import { UserupdateModel } from '../../models/user_update.model';
import { UID } from '../../value_objects/types';

// --------------------------------
// Helpers
// --------------------------------

abstract class BaseUserService {
  abstract getUsers(): Promise<UserEntity[]>;
  abstract createUser(createModel: UserCreateModel): Promise<void>;
  abstract updateUser(updateModel: UserupdateModel): Promise<UserEntity>;
  abstract deleteUser(uid: UID): Promise<void>;
  abstract verifyToken(token: string): Promise<UID>;
}

// --------------------------------
// Public Interface
// --------------------------------

export { BaseUserService };
