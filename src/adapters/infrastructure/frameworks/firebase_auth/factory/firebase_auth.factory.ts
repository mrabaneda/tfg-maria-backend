// --------------------------------
// Requirements
// --------------------------------

import { CreateRequest } from 'firebase-admin/lib/auth/auth-config';
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';
import { AuthUserCreateModel } from 'src/core/domain/models/auth_user_create.model';
import { DecodedAuthUserModel } from 'src/core/domain/models/decoded_auth_user.model';

// --------------------------------
// Helpers
// --------------------------------

class FirebaseAuthFactory {
  static decodedIdTokenToDecodedAuthModel(decodedIdToken: DecodedIdToken): DecodedAuthUserModel {
    return {
      uid: decodedIdToken.uid,
      isAdmin: decodedIdToken.admin ?? false,
    };
  }

  static authUserCreateModelToCreateRequest(authUserModel: AuthUserCreateModel) : CreateRequest {
    return {
      displayName: authUserModel.name,
      photoURL: authUserModel.photoUrl,
      email: authUserModel.email,
      password: authUserModel.password,      
    }
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { FirebaseAuthFactory };
