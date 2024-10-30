// --------------------------------
// Requirements
// --------------------------------

import { LoginPasswordVO } from '../value_objects/login_password.vo';
import { UID } from '../value_objects/types';

// --------------------------------
// Helpers
// --------------------------------

interface LoginEntity {
  readonly uid: UID;
  readonly email: string;
  readonly photoUrl: string;
  readonly photoRelativePath: string;
  readonly photoName: string;
  readonly passwordModel: LoginPasswordVO[];
}

// --------------------------------
// Public Interface
// --------------------------------

export { LoginEntity };
