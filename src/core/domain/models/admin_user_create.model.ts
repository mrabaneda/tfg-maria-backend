// --------------------------------
// Requirements
// --------------------------------

import { UID } from "../value_objects/types";

// --------------------------------
// Helpers
// --------------------------------

interface AdminUserCreateModel {
  readonly uid: UID;
  readonly email: string;
  readonly name: string;
  readonly photoUrl: string;
  readonly photoRelativePath: string;
  readonly photoName: string;
}

// --------------------------------
// Public Interface
// --------------------------------

export { AdminUserCreateModel };
