// --------------------------------
// Requirements
// --------------------------------

import { AuthUserCreateModel } from '../../models/auth_user_create.model';
import { DecodedAuthUserModel } from '../../models/decoded_auth_user.model';
import { UID } from '../../value_objects/types';

// --------------------------------
// Helpers
// --------------------------------

abstract class BaseAuthService {
  abstract create(createModel: AuthUserCreateModel): Promise<UID>;
  abstract delete(uid: UID): Promise<void>;
  abstract verifyToken(token: string): Promise<DecodedAuthUserModel>;
}

// --------------------------------
// Public Interface
// --------------------------------

export { BaseAuthService };
