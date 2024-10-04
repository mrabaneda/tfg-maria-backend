// --------------------------------
// Requirements
// --------------------------------

import { UID } from 'src/core/domain/value_objects/types';

// --------------------------------
// Helpers
// --------------------------------

class AdminUserDto {
  userId: UID;
  name: string | null;
  email: string | null;
  photoUrl: string | null;
  createdAt: Date;
  updatedAt: Date | null;
  isAdmin: boolean | null;
}

// --------------------------------
// Public Interface
// --------------------------------

export { AdminUserDto };
