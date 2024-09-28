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
  static createAdminUserModelToCreateUserRequest(model: AdminUserCreateModel): CreateRequest {
    return {
      displayName: model.name,
      password: model.password,
      email: model.email,
      photoURL: model.photoUrl,
    };
  }

  static firebaseAuthUserRecordToEntity(firebaseAuthUser: UserRecord): AdminUserEntity {
    return {
      userId: firebaseAuthUser.uid,
      email: firebaseAuthUser.email,
      name: firebaseAuthUser.displayName,
      photoUrl: firebaseAuthUser.photoURL ?? null,
      isAdmin: firebaseAuthUser.customClaims['admin'] ? (firebaseAuthUser.customClaims['admin'] as boolean) : false, 
      createdAt: new Date(firebaseAuthUser.metadata.creationTime), // TODO: convertir apropiadamente
      updatedAt: new Date(firebaseAuthUser.metadata.lastRefreshTime), // TODO: igual que arriba
    };
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { FirebaseAuthAdminUserFactory };
