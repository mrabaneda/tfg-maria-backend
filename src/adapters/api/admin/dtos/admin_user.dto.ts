// --------------------------------
// Requirements
// --------------------------------

import { UID } from 'src/core/domain/value_objects/types';

// --------------------------------
// Helpers
// --------------------------------

class AdminUserDto {
  uid: UID;
  name: string;
  email: string;
  photoUrl: string;
}

// --------------------------------
// Public Interface
// --------------------------------

export { AdminUserDto };
