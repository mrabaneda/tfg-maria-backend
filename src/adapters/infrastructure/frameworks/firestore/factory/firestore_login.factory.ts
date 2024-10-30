// --------------------------------
// Requirements
// --------------------------------

import { DocumentData } from 'firebase-admin/firestore';
import { UID } from 'src/core/domain/value_objects/types';
import { LoginEntity } from 'src/core/domain/entities/login.entity';
import {
  FirestoreLoginModel,
  FirestoreLoginModelScheme,
  FirestoreLoginPasswordModel,
} from '../models/firestore_login.model';
import { LoginPasswordVO } from 'src/core/domain/value_objects/login_password.vo';

// --------------------------------
// Helpers
// --------------------------------

class FirestoreLoginFactory {
  static documentDataToLoginEntity(id: UID, documentData: DocumentData): LoginEntity {
    return {
      uid: id,
      email: documentData[FirestoreLoginModelScheme.fields.email] as string,
      photoUrl: documentData[FirestoreLoginModelScheme.fields.photoUrl] as string,
      photoRelativePath: documentData[FirestoreLoginModelScheme.fields.photoRelativePath] as string,
      photoName: documentData[FirestoreLoginModelScheme.fields.photoName] as string,
      passwordModel: (
        documentData[FirestoreLoginModelScheme.fields.passwordModel] as FirestoreLoginPasswordModel[]
      ).map(
        (firestoreLoginPaswdModel) =>
          ({
            photoUrl: firestoreLoginPaswdModel.photoUrl,
            passwordPiece: firestoreLoginPaswdModel.passwordPiece,
            photoName: firestoreLoginPaswdModel.photoName,
            photoRelativePath: firestoreLoginPaswdModel.photoRelativePath,
          } satisfies LoginPasswordVO),
      ),
    };
  }

  static loginEntityToModel(loginEntity: LoginEntity): FirestoreLoginModel {
    return {
      email: loginEntity.email,
      photoUrl: loginEntity.photoUrl,
      photoName: loginEntity.photoName,
      photoRelativePath: loginEntity.photoRelativePath,
      passwordModel: loginEntity.passwordModel,
    };
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { FirestoreLoginFactory };
