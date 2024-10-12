// --------------------------------
// Requirements
// --------------------------------

import { DocumentData } from 'firebase-admin/firestore';
import { AdminUserEntity } from 'src/core/domain/entities/admin_user.entity';
import { UID } from 'src/core/domain/value_objects/types';
import { AdminUserCreateModel } from 'src/core/domain/models/admin_user_create.model';
import { FirestoreAdminUserModel, FirestoreAdminUserModelScheme } from '../models/firestore_admin_user.model';

// --------------------------------
// Helpers
// --------------------------------

class FirestoreAdminFactory {
  static documentDataToAdminUserEntity(id: UID, documentData: DocumentData): AdminUserEntity {
    return {
      uid: id,
      name: documentData[FirestoreAdminUserModelScheme.fields.name] as string,
      email: documentData[FirestoreAdminUserModelScheme.fields.email] as string,
      photoUrl: documentData[FirestoreAdminUserModelScheme.fields.photoUrl] as string,
      photoName: documentData[FirestoreAdminUserModelScheme.fields.photoName] as string,
      photoRelativePath: documentData[FirestoreAdminUserModelScheme.fields.photoRelativePath] as string,
    };
  }

  static adminUserCreateModelToFirestoreAdminModel(createModel: AdminUserCreateModel): FirestoreAdminUserModel {
    return {
      name: createModel.name,
      email: createModel.email,
      photoUrl: createModel.photoUrl,
      photoName: createModel.photoName,
      photoRelativePath: createModel.photoRelativePath,
    };
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { FirestoreAdminFactory };
