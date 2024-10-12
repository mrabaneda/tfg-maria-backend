// --------------------------------
// Requirements
// --------------------------------

import { UID } from 'src/core/domain/value_objects/types';
import { PreferencesTypeEnum } from 'src/core/domain/enum/preferences_type.enum';

// --------------------------------
// Helpers
// --------------------------------

class UserDto {
  uid: UID;
  name: string;
  email: string;
  photoUrl: string;
  preference: PreferencesTypeEnum;
}

// --------------------------------
// Public Interface
// --------------------------------

export { UserDto };
