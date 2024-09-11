// --------------------------------
// Requirements
// --------------------------------

import { UserEntity } from "src/core/entities/user.entity";
import { FirebaseUserModel } from "../models/firebase_user.model";
import { FirebasePreferencesTypeEnum } from "../enums/firebase_preferences_type.enum";
import { PreferencesTypeEnum } from "src/core/value_objects/preferences_type_enum_value";


// --------------------------------
// Helpers
// --------------------------------

class FirebaseUserFactory {
    userModelToEntity(userModel: FirebaseUserModel): UserEntity {
        return {
            userId: userModel.userId,
            imageId: userModel.imageId,
            name: userModel.name,
            preferences: this._usermodelPreferencesTypeToEntity(userModel.preferences),
            createdAt: new Date(userModel.createdAt),
            updatedAt: new Date(userModel.updatedAt),
        }
    }

    private _usermodelPreferencesTypeToEntity(preferences: FirebasePreferencesTypeEnum): PreferencesTypeEnum {
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