// --------------------------------
// Requirements
// --------------------------------

import { UserEntity } from 'src/core/domain/entities/user.entity';
import { PreferencesTypeEnum } from 'src/core/domain/enum/preferences_type.enum';
import { FirebasePreferencesTypeEnum } from '../enums/firebase_preferences_type.enum';
import { FirebaseUserModel, FirebaseUserModelSchema } from '../../firebase_firestore/models/firebase_user.model';

// --------------------------------
// Helpers
// --------------------------------

class FirebaseUserFactory {
  static userModelToEntity(userModel: FirebaseUserModel): UserEntity {
    return {
      userId: userModel[FirebaseUserModelSchema.fields.userId],
      imageId: userModel[FirebaseUserModelSchema.fields.imageId],
      name: userModel[FirebaseUserModelSchema.fields.name],
      preferences: FirebaseUserFactory._usermodelPreferencesTypeToEntity(userModel.preferences),
      createdAt: userModel[FirebaseUserModelSchema.fields.createdAt],
      updatedAt: userModel[FirebaseUserModelSchema.fields.updatedAt],
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

export { FirebaseUserFactory };
