// --------------------------------
// Requirements
// --------------------------------

import { IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { PreferencesTypeEnum } from 'src/core/domain/enum/preferences_type.enum';

// --------------------------------
// Helpers
// --------------------------------

class UserCreateDto {
  @IsString({ message: 'invalid-keyword' })
  @IsNotEmpty({ message: 'empty-keyword' })
  keyWord: string;

  @IsString({ message: 'invalid-password' })
  @MinLength(6, { message: 'invalid-password-length' })
  password: string;

  @IsString({ message: 'invalid-name' })
  @IsNotEmpty({ message: 'empty-name' })
  name: string;

  @IsEnum(PreferencesTypeEnum)
  preference: PreferencesTypeEnum;
}

// --------------------------------
// Public Interface
// --------------------------------

export { UserCreateDto };
