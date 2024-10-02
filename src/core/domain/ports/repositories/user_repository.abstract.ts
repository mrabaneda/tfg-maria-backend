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

abstract class BaseUserRepository {
  abstract get(): Promise<UserEntity[]>;
  abstract create(createModel: UserCreateModel): Promise<void>;
  abstract update(updateModel: UserupdateModel): Promise<UserEntity>;
  abstract delete(uid: UID): Promise<void>;
  abstract verifyToken(token: string): Promise<UID>;
}

// --------------------------------
// Public Interface
// --------------------------------

export { BaseUserRepository };
