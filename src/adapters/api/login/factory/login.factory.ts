// --------------------------------
// Requirements
// --------------------------------

import { LoginEntity } from 'src/core/domain/entities/login.entity';
import { LoginPasswordVO } from 'src/core/domain/value_objects/login_password.vo';
import { LoginDto } from '../dtos/login.dto';
import { LoginPasswordDto } from '../dtos/login_password.dto';

// --------------------------------
// Helpers
// --------------------------------

class LoginFactory {
  static loginEntityToDto(loginEntity: LoginEntity): LoginDto {
    return {
      uid: loginEntity.uid,
      email: loginEntity.email,
      photoUrl: loginEntity.photoUrl,
      photoRelativePath: loginEntity.photoRelativePath,
      photoName: loginEntity.photoName,
      passwordModel: loginEntity.passwordModel.map(LoginFactory._loginPasswordEntityToDto),
    };
  }

  private static _loginPasswordEntityToDto(loginPasswordEntity: LoginPasswordVO): LoginPasswordDto {
    return {
      photoUrl: loginPasswordEntity.photoUrl,
      passwordPiece: loginPasswordEntity.passwordPiece,
      photoRelativePath: loginPasswordEntity.photoRelativePath,
      photoName: loginPasswordEntity.photoName,
    };
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { LoginFactory };
