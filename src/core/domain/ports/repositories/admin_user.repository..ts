// --------------------------------
// Requirements
// --------------------------------

import { AdminUserEntity } from 'src/core/domain/entities/admin_user.entity';
import { UID } from 'src/core/domain/value_objects/types';
import { AdminUserCreateModel } from '../../models/admin_user_create.model';

// --------------------------------
// Helpers
// --------------------------------

abstract class BaseAdminUserRepository {
  abstract getOneOrFail(uid: UID): Promise<AdminUserEntity>;
  abstract get(): Promise<AdminUserEntity[]>;
  abstract create(createModel: AdminUserCreateModel): Promise<void>;
  //abstract edit() : Promise<AdminUserEntity>;  TODO: Pensar si vamos a necesitar esto
  abstract delete(uid: UID): Promise<void>;
  abstract verifyToken(token: string): Promise<UID>;
}

// --------------------------------
// Public Interface
// --------------------------------

export { BaseAdminUserRepository };
