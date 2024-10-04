// --------------------------------
// Requirements
// --------------------------------

import { IsEmail, IsNotEmpty, IsOptional, IsString, IsUrl, MinLength, Validate } from 'class-validator';
import { PreferencesTypeEnum } from 'src/core/domain/enum/preferences_type.enum';

// --------------------------------
// Helpers
// --------------------------------

// TODO: revisar esto, seguramente es necesario un objeto de tipo File para la imagen y mejorar las validaciones del dato

class UserCreateDto {
  @IsEmail(undefined, { message: 'invalid-email' })
  email: string;

  @IsString({ message: 'invalid-password' })
  @MinLength(6, { message: 'invalid-password-length' })
  password: string;

  @IsString({ message: 'invalid-name' })
  @IsNotEmpty({ message: 'empty-name' })
  name: string;

  //   @Validate(({ photoUrl }) => !!photoUrl)
  @IsOptional()
  @IsUrl(undefined, { message: 'invalid-photo-url' })
  photoUrl: string;

  preference: PreferencesTypeEnum;
}

// --------------------------------
// Public Interface
// --------------------------------

export { UserCreateDto };
