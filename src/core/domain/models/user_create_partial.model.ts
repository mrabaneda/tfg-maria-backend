// --------------------------------
// Requirements
// --------------------------------

import { PreferencesTypeEnum } from '../enum/preferences_type.enum';

// --------------------------------
// Helpers
// --------------------------------

interface UserCreatePartialModel {
  readonly name: string;
  readonly keyWord: string;
  readonly password: string;
  readonly preference: PreferencesTypeEnum;
  readonly imageBuffer: Buffer;
  readonly imageExtension: string;
  readonly imageBuffer1: Buffer;
  readonly imageExtension1: string;
  readonly imageBuffer2: Buffer;
  readonly imageExtension2: string;
  readonly imageBuffer3: Buffer;
  readonly imageExtension3: string;
  readonly imageBuffer4: Buffer;
  readonly imageExtension4: string;
}

// --------------------------------
// Public Interface
// --------------------------------

export { UserCreatePartialModel };
