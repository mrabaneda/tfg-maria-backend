// --------------------------------
// Requirements
// --------------------------------

import { UID } from '../value_objects/types';

// --------------------------------
// Helpers
// --------------------------------

// TODO: Convertir a una clase con sus correspondientes validaciones.

interface AdminUserEntity {
  userId: UID;
  name: string;
  email: string;
  photoUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
  isAdmin: boolean;
}

// --------------------------------
// Public Interface
// --------------------------------

export { AdminUserEntity };
