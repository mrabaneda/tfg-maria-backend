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
  static createAdminUserModelToCreateRequest(model: AdminUserCreateModel): CreateRequest {
    return {
      displayName: model.name,
      password: model.password,
      email: model.email,
      photoURL: model.photoUrl,
    };
  }

  static firebaseAuthUserRecordToEntity(firebaseAuthUser: UserRecord): AdminUserEntity {
    return new AdminUserEntity(
      firebaseAuthUser.uid,
      firebaseAuthUser.email,
      firebaseAuthUser.displayName,
      firebaseAuthUser.photoURL ?? null,
      firebaseAuthUser.customClaims['admin'] ? (firebaseAuthUser.customClaims['admin'] as boolean) : false,
      new Date(firebaseAuthUser.metadata.creationTime),
      new Date(firebaseAuthUser.metadata.lastRefreshTime),
    );
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { FirebaseAuthAdminUserFactory };
