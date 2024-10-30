// --------------------------------
// Requirements
// --------------------------------

import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

// --------------------------------
// Helpers
// --------------------------------

class AdminUserCreateDto {
  @IsEmail(undefined, { message: 'invalid-email' })
  email: string;

  @IsString({ message: 'invalid-password' })
  @MinLength(6, { message: 'invalid-password-length' })
  password: string;

  @IsString({ message: 'invalid-name' })
  @IsNotEmpty({ message: 'empty-name' })
  name: string;
}

// --------------------------------
// Public Interface
// --------------------------------

export { AdminUserCreateDto };
