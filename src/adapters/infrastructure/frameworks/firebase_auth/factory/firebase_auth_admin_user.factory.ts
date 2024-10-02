// --------------------------------
// Requirements
// --------------------------------

import { CreateRequest } from 'firebase-admin/lib/auth/auth-config';
import { UserRecord } from 'firebase-admin/lib/auth/user-record';
import { AdminUserEntity } from 'src/core/domain/entities/admin_user.entity';
import { AdminUserCreateModel } from 'src/core/domain/models/admin_user_create.model';

// --------------------------------
// Helpers
// --------------------------------

class FirebaseAuthAdminUserFactory {
  static firebaseAuthUserRecordToEntity(firebaseAuthUser: UserRecord): AdminUserEntity {
    // TODO: REVISAR. screaming FUERTE
    return new AdminUserEntity(
      firebaseAuthUser.uid,
      firebaseAuthUser.displayName as string,
      firebaseAuthUser.email as string,
      firebaseAuthUser.photoURL ?? null,
      firebaseAuthUser.customClaims != null
        ? firebaseAuthUser.customClaims['admin']
          ? (firebaseAuthUser.customClaims['admin'] as boolean)
          : false
        : null,
      new Date(firebaseAuthUser.metadata.creationTime),
      firebaseAuthUser.metadata.lastRefreshTime != null ? new Date(firebaseAuthUser.metadata.lastRefreshTime) : null,
    );
  }

  static createAdminUserModelToCreateRequest(model: AdminUserCreateModel): CreateRequest {
    return {
      displayName: model.name,
      password: model.password,
      email: model.email,
      photoURL: model.photoUrl,
    };
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { FirebaseAuthAdminUserFactory };
