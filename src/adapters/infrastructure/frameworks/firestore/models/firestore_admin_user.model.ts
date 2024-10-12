// --------------------------------
// Requirements
// --------------------------------

import { CollectionScheme } from './collection_scheme.model';

// --------------------------------
// Helpers
// --------------------------------

interface FirestoreAdminUserModel {
  readonly name: string;
  readonly email: string;
  readonly photoUrl: string;
  readonly photoRelativePath: string;
  readonly photoName: string;
}

const FirestoreAdminUserModelScheme: CollectionScheme<FirestoreAdminUserModel> = {
  collectionName: 'admins',
  fields: {
    name: 'name',
    email: 'email',
    photoUrl: 'photoUrl',
    photoRelativePath: 'photoRelativePath',
    photoName: 'photoName',
  },
};

// --------------------------------
// Public Interface
// --------------------------------

export { FirestoreAdminUserModel, FirestoreAdminUserModelScheme };
