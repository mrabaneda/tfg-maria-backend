// --------------------------------
// Requirements
// --------------------------------

import { CollectionScheme } from './collection_scheme.model';

// --------------------------------
// Helpers
// --------------------------------

interface FirestoreLoginPasswordModel {
  readonly photoUrl: string;
  readonly passwordPiece: string;
  readonly photoRelativePath: string;
  readonly photoName: string;
}

interface FirestoreLoginModel {
  readonly email: string;
  readonly photoUrl: string;
  readonly photoRelativePath: string;
  readonly photoName: string;
  readonly passwordModel: FirestoreLoginPasswordModel[];
}

const FirestoreLoginModelScheme: CollectionScheme<FirestoreLoginModel> = {
  collectionName: 'logins',
  fields: {
    email: 'email',
    photoUrl: 'photoUrl',
    passwordModel: 'passwordModel',
    photoRelativePath: 'photoRelativePath',
    photoName: 'photoName'
  },
};

const FirestoreLoginPasswordModelScheme: { [K in keyof FirestoreLoginPasswordModel]: K } = {
  photoUrl: 'photoUrl',
  passwordPiece: 'passwordPiece',
  photoRelativePath: 'photoRelativePath',
  photoName: 'photoName'
};

// --------------------------------
// Public Interface
// --------------------------------

export {
  FirestoreLoginModel,
  FirestoreLoginPasswordModel,
  FirestoreLoginModelScheme,
  FirestoreLoginPasswordModelScheme,
};
