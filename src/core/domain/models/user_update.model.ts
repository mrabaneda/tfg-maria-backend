// --------------------------------
// Requirements
// --------------------------------

import { PreferencesTypeEnum } from '../enum/preferences_type.enum';

// --------------------------------
// Helpers
// --------------------------------

interface UserupdateModel {
  email: string;
  password: string;
  name: string;
  photoUrl: string;
  preference: PreferencesTypeEnum;
}

// --------------------------------
// Public Interface
// --------------------------------

export { UserupdateModel };
