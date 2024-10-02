// --------------------------------
// Requirements
// --------------------------------

import { AdminUserEntity } from '../../entities/admin_user.entity';
import { AdminUserCreateModel } from '../../models/admin_user_create.model';
import { UID } from '../../value_objects/types';

// --------------------------------
// Helpers
// --------------------------------

abstract class BaseAdminUserService {
  abstract getAdminUserOrFail(uid: UID): Promise<AdminUserEntity>;
  abstract getAdminUsers(): Promise<AdminUserEntity[]>;
  abstract createAdminUser(createModel: AdminUserCreateModel): Promise<void>;
  //abstract edit() : Promise<AdminUserEntity>;  TODO: Pensar si vamos a necesitar esto
  abstract deleteAdminUser(uid: UID): Promise<void>;
  abstract verifyToken(token: string): Promise<UID>;
}

// --------------------------------
// Public Interface
// --------------------------------

export { BaseAdminUserService };
