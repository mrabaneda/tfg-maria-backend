// --------------------------------
// Requirements
// --------------------------------

import { DocumentScheme } from 'src/helpers/constants';
import { ImageID, UID } from 'src/core/domain/value_objects/types';
import { FirebasePreferencesTypeEnum } from '../enums/firebase_preferences_type.enum';

// --------------------------------
// Helpers
// --------------------------------

interface FirebaseUserModel {
  userId: UID;
  imageId: ImageID;
  name: string;
  preferences: FirebasePreferencesTypeEnum;
  createdAt: Date;
  updatedAt: Date;
}

const FirebaseUserModelSchema: DocumentScheme<FirebaseUserModel> = {
  fields: {
    userId: 'user_id',
    imageId: 'image_id',
    name: 'name',
    preferences: 'preferences',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};

// --------------------------------
// Requirements
// --------------------------------

export { FirebaseUserModel, FirebaseUserModelSchema };
