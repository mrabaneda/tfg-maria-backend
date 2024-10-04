// --------------------------------
// Requirements
// --------------------------------

import { UID } from 'src/core/domain/value_objects/types';
import { PreferencesTypeEnum } from 'src/core/domain/enum/preferences_type.enum';

// --------------------------------
// Helpers
// --------------------------------

class UserDto {
  userId: UID;
  name: string | null;
  email: string | null;
  photoUrl: string | null;
  createdAt: Date;
  updatedAt: Date | null;
  preference: PreferencesTypeEnum | null;
}

// --------------------------------
// Public Interface
// --------------------------------

export { UserDto };
