// --------------------------------
// Requirements
// --------------------------------

import { PreferencesTypeEnum } from '../enum/preferences_type.enum';
import { UID } from '../value_objects/types';

// --------------------------------
// Helpers
// --------------------------------

interface UserUpdateModel {
  readonly uid: UID;
  readonly name: string;
  readonly preference: PreferencesTypeEnum;
}

// --------------------------------
// Public Interface
// --------------------------------

export { UserUpdateModel };
