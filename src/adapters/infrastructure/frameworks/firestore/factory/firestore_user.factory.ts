// --------------------------------
// Requirements
// --------------------------------

import { DocumentData } from 'firebase-admin/firestore';
import { UserUpdateModel } from 'src/core/domain/models/user_update.model';
import { UserCreateModel } from 'src/core/domain/models/user_create.model';
import { UserEntity } from 'src/core/domain/entities/user.entity';
import { UID } from 'src/core/domain/value_objects/types';
import { PreferencesTypeEnum } from 'src/core/domain/enum/preferences_type.enum';
import { FirestoreUserModel, FirestoreUserModelScheme } from '../models/firestore_user.model';

// --------------------------------
// Helpers
// --------------------------------

class FirestoreUserFactory {
  static documentDataToUserEntity(id: UID, documentData: DocumentData): UserEntity {
    return {
      uid: id,
      name: documentData[FirestoreUserModelScheme.fields.name] as string,
      preference: documentData[FirestoreUserModelScheme.fields.preference] as PreferencesTypeEnum,
    };
  }

  static createUserModelToFirestoreUserModel(createModel: UserCreateModel): FirestoreUserModel {
    return {
      name: createModel.name,
      preference: createModel.preference,
    };
  }

  static updateUserModelToDocumentData(updateModel: UserUpdateModel): DocumentData {
    return {
      [FirestoreUserModelScheme.fields.name]: updateModel.name,
      [FirestoreUserModelScheme.fields.preference]: updateModel.preference,
    };
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { FirestoreUserFactory };
