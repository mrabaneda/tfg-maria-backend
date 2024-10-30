// --------------------------------
// Requirements
// --------------------------------

import { UID } from '../value_objects/types';

// --------------------------------
// Helpers
// --------------------------------

interface DecodedAuthUserModel {
  readonly uid: UID;
  readonly isAdmin: boolean;
}

// --------------------------------
// Public Interface
// --------------------------------

export { DecodedAuthUserModel };
