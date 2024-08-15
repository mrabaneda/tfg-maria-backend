// --------------------------------
// Requirements
// --------------------------------

import { DocumentScheme } from "src/helpers/constants";
import { ImageID, UID } from "src/core/value_objects/types";
import { PreferencesTypeEnum } from "src/core/value_objects/preferences_type_enum_value";

// --------------------------------
// Helpers
// --------------------------------

interface FirebaseUserModel {
    userId: UID;
    imageId: ImageID;
    name: string;
    preferences: PreferencesTypeEnum;
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
    }
}

// --------------------------------
// Requirements
// --------------------------------

export {
    FirebaseUserModel, FirebaseUserModelSchema
};