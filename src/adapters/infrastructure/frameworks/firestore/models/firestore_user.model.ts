// --------------------------------
// Requirements
// --------------------------------

import { PreferencesTypeEnum } from 'src/core/domain/enum/preferences_type.enum';
import { CollectionScheme } from './collection_scheme.model';

// --------------------------------
// Helpers
// --------------------------------

interface FirestoreUserModel {
  readonly name: string;
  readonly preference: PreferencesTypeEnum;
}

const FirestoreUserModelScheme: CollectionScheme<FirestoreUserModel> = {
  collectionName: 'users',
  fields: {
    name: 'name',
    preference: 'preference',
  },
};

// --------------------------------
// Public Interface
// --------------------------------

export { FirestoreUserModel, FirestoreUserModelScheme };
