// --------------------------------
// Requirements
// --------------------------------

import { ImageID, UID } from "../value_objects/types";
import { PreferencesTypeEnum } from "../enum/preferences_type.enum";

// --------------------------------
// Helpers
// --------------------------------

interface UserEntity {
    userId: UID;
    imageId: ImageID;
    name: string;
    preferences: PreferencesTypeEnum;
    createdAt: Date;
    updatedAt: Date;
}

// --------------------------------
// Public Interface
// --------------------------------

export { UserEntity };