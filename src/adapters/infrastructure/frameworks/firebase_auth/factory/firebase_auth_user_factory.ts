// --------------------------------
// Requirements
// --------------------------------

import { CreateRequest } from 'firebase-admin/lib/auth/auth-config';
import { UserRecord } from 'firebase-admin/lib/auth/user-record';
import { UserEntity } from 'src/core/domain/entities/user.entity';
import { FirebasePreferencesTypeEnum } from '../enums/firebase_preferences_type.enum';
import { PreferencesTypeEnum } from 'src/core/domain/enum/preferences_type.enum';
import { UserCreateModel } from 'src/core/domain/models/user_create.model';

// --------------------------------
// Helpers
// --------------------------------

class FirebaseAuthUserFactory {
  static firebaseAuthUserRecordToEntity(firebaseAuthUser: UserRecord): UserEntity {
    // TODO: REVISAR. screaming FUERTE
    return new UserEntity(
      firebaseAuthUser.uid,
      firebaseAuthUser.displayName as string,
      firebaseAuthUser.email as string,
      firebaseAuthUser.photoURL ?? null,
      firebaseAuthUser.customClaims != null
        ? this._usermodelPreferencesTypeToEntity(
            firebaseAuthUser.customClaims['preference'] as FirebasePreferencesTypeEnum,
          )
        : PreferencesTypeEnum.NONE,
      new Date(firebaseAuthUser.metadata.creationTime),
      firebaseAuthUser.metadata.lastRefreshTime != null ? new Date(firebaseAuthUser.metadata.lastRefreshTime) : null,
    );
  }

  static createUserModelToCreateRequest(model: UserCreateModel): CreateRequest {
    return {
      displayName: model.name,
      password: model.password,
      email: model.email,
      photoURL: model.photoUrl,
    };
  }

  private static _usermodelPreferencesTypeToEntity(preferences: FirebasePreferencesTypeEnum): PreferencesTypeEnum {
    switch (preferences) {
      case FirebasePreferencesTypeEnum.AUDIO:
        return PreferencesTypeEnum.AUDIO;
      case FirebasePreferencesTypeEnum.TEXT:
        return PreferencesTypeEnum.TEXT;
      case FirebasePreferencesTypeEnum.IMAGES:
        return PreferencesTypeEnum.IMAGES;
      default:
        throw new Error(`Invalid FirebasePreferencesTypeEnum value`);
    }
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { FirebaseAuthUserFactory };
