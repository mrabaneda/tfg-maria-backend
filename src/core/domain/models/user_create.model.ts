// --------------------------------
// Requirements
// --------------------------------

import { PreferencesTypeEnum } from '../enum/preferences_type.enum';

// --------------------------------
// Helpers
// --------------------------------

interface UserCreateModel {
  email: string;
  password: string;
  name: string;
  photoUrl: string;
  preference: PreferencesTypeEnum;
}

// --------------------------------
// Public Interface
// --------------------------------

export { UserCreateModel };
