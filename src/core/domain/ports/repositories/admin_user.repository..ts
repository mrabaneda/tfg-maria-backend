// --------------------------------
// Requirements
// --------------------------------

import { AdminUserEntity } from '../../entities/admin_user.entity';
import { AdminUserCreateModel } from '../../models/admin_user_create.model';
import { UID } from '../../value_objects/types';

// --------------------------------
// Helpers
// --------------------------------

abstract class BaseAdminUserRepository {
  abstract get(): Promise<AdminUserEntity[]>;
  abstract getOneOrFail(uid: UID): Promise<AdminUserEntity>;
  abstract create(createModel: AdminUserCreateModel): Promise<void>;
  abstract delete(uid: UID): Promise<void>;
}

// --------------------------------
// Public Interface
// --------------------------------

export { BaseAdminUserRepository };
