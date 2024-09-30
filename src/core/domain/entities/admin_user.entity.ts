// --------------------------------
// Requirements
// --------------------------------

import { UID } from '../value_objects/types';

// --------------------------------
// Helpers
// --------------------------------

class AdminUserEntity {
  constructor(
    private readonly _userId: UID,
    private readonly _name: string,
    private readonly _email: string,
    private readonly _photoUrl: string | null,
    private readonly _isAdmin: boolean,
    private readonly _createdAt: Date,
    private readonly _updatedAt: Date,
  ) {
    if (!this._userId || this._userId.trim().length === 0) {
      throw new Error('AdminUserEntity: userId is required and cannot be empty.');
    }
    if (!this._name || this._name.trim().length === 0) {
      throw new Error('AdminUserEntity: name is required and cannot be empty.');
    }
    if (!this._email || this._email.trim().length === 0) {
      throw new Error('AdminUserEntity: email is required and cannot be empty.');
    }
    if (!this._createdAt) {
      throw new Error('AdminUserEntity: created date is required.');
    }
    if (!this._updatedAt) {
      throw new Error('AdminUserEntity: update date is required.');
    }
    if (!this._isAdmin) {
      throw new Error('AdminUserEntity: isAdmin is required.');
    }
  }

  public get userId() {
    return this._userId;
  }
  public get name() {
    return this.name;
  }
  public get email() {
    return this._email;
  }
  public get photoUrl() {
    return this._photoUrl;
  }
  public get createdAt() {
    return this._createdAt;
  }
  public get updatedAt() {
    return this._updatedAt;
  }
  public get isAdmin() {
    return this._isAdmin;
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { AdminUserEntity };
