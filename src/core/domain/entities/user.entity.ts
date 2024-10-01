// --------------------------------
// Requirements
// --------------------------------

import { ImageID, UID } from '../value_objects/types';
import { PreferencesTypeEnum } from '../enum/preferences_type.enum';

// --------------------------------
// Helpers
// --------------------------------

class UserEntity {
  constructor(
    private readonly _userId: UID,
    private readonly _imageId: ImageID, // TODO: revisar si mejor ruta a bucket
    private readonly _name: string,
    private readonly _preference: PreferencesTypeEnum,
    private readonly _createdAt: Date,
    private readonly _updatedAt: Date,
  ) {
    if (!this._userId || this._userId.trim().length === 0) {
      throw new Error('UserEntity: userId is required and cannot be empty.');
    }
    if (!this._imageId || this._userId.trim().length === 0) {
      throw new Error('UserEntity: imageId is required and cannot be empty.');
    }
    if (!this._name || this._name.trim().length === 0) {
      throw new Error('UserEntity: name is required and cannot be empty.');
    }
    if (!Object.values(PreferencesTypeEnum).includes(this._preference)) {
      throw new Error('UserEntity: a valid preference is required.');
    }
    if (!this._createdAt) {
      throw new Error('UserEntity: created date is required.');
    }
    if (!this._updatedAt) {
      throw new Error('UserEntity: update date is required.');
    }
  }

  public get userId() {
    return this._userId;
  }
  public get imageId() {
    return this._imageId;
  }
  public get name() {
    return this._name;
  }
  public get preference() {
    return this._preference;
  }
  public get createdAt() {
    return this._createdAt;
  }
  public get updatedAt() {
    return this._updatedAt;
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { UserEntity };
