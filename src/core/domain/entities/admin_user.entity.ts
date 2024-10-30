// --------------------------------
// Requirements
// --------------------------------

import { UID } from '../value_objects/types';

// --------------------------------
// Helpers
// --------------------------------

interface AdminUserEntity {
  readonly uid: UID;
  readonly name: string;
  readonly email: string;
  readonly photoUrl: string;
  readonly photoRelativePath: string;
  readonly photoName: string;
}

// --------------------------------
// Public Interface
// --------------------------------

export { AdminUserEntity };
