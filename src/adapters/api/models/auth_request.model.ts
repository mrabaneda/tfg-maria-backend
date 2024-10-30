// --------------------------------
// Requirements
// --------------------------------

import { Request } from 'express';
import { UID } from 'src/core/domain/value_objects/types';

// --------------------------------
// Helpers
// --------------------------------

interface AuthRequest extends Request {
  uid: UID;
  isAdmin: boolean;
}

// --------------------------------
// Public Interface
// -------------------------------

export { AuthRequest };
