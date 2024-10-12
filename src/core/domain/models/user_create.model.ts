// --------------------------------
// Requirements
// --------------------------------

import { PreferencesTypeEnum } from '../enum/preferences_type.enum';
import { UID } from '../value_objects/types';

// --------------------------------
// Helpers
// --------------------------------

interface UserCreateModel {
  readonly uid: UID;
  readonly name: string;
  readonly preference: PreferencesTypeEnum;
}

// --------------------------------
// Public Interface
// --------------------------------

export { UserCreateModel };
