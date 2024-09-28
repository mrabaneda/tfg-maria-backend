// --------------------------------
// Requirements
// --------------------------------

import { UID } from 'src/core/domain/value_objects/types';

// --------------------------------
// Helpers
// --------------------------------

class AdminUserDto {
  userId: UID;
  name: string;
  email: string;
  photoUrl: string;
  createdAt: Date;
  updatedAt: Date;
  isAdmin: boolean;
}

// --------------------------------
// Public Interface
// --------------------------------

export { AdminUserDto };
