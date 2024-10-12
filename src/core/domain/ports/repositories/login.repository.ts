// --------------------------------
// Requirements
// --------------------------------

import { UID } from '../../value_objects/types';
import { LoginEntity } from '../../entities/login.entity';

// --------------------------------
// Helpers
// --------------------------------

abstract class BaseLoginRepository {
  abstract getOneOrFail(uid: UID): Promise<LoginEntity>;
  abstract get(): Promise<LoginEntity[]>;
  abstract create(loginEntity: LoginEntity): Promise<void>;
  abstract delete(uid: UID): Promise<void>;
}

// --------------------------------
// Public Interface
// --------------------------------

export { BaseLoginRepository };
