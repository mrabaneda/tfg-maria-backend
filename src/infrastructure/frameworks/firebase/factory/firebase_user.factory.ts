// --------------------------------
// Requirements
// --------------------------------

import { firestore } from "firebase-admin";
import { User } from "src/core/entities/user.entity";
import { PreferencesTypeEnum } from "src/core/value_objects/preferences_type_enum_value";
import { FirebaseUserModelSchema } from "../models/firebase_user.model";


// --------------------------------
// Helpers
// --------------------------------

class FirebaseUserFactory {
    private readonly tuTiendaUrl: string;

    constructor() {
        this.tuTiendaUrl = process.env.TUTIENDA_URL!;
    }

    userModelToEntity(model: firestore.DocumentData): User {
        return {
            userId: model[FirebaseUserModelSchema.fields.userId],
            imageId: model[FirebaseUserModelSchema.fields.imageId],
            name: model[FirebaseUserModelSchema.fields.name],
            preferences: this.mapPreferences(model[FirebaseUserModelSchema.fields.preferences]),
            createdAt: model[FirebaseUserModelSchema.fields.createdAt],
            updatedAt: model[FirebaseUserModelSchema.fields.updatedAt],
        }
    }

    private mapPreferences(preferences: string): PreferencesTypeEnum {
        switch (preferences) {
            case 'AUDIO':
                return PreferencesTypeEnum.AUDIO;
            case 'TEXT':
                return PreferencesTypeEnum.TEXT;
            case 'IMAGES':
                return PreferencesTypeEnum.IMAGES;
            default:
                return PreferencesTypeEnum.NONE;
        }
    }
}

// --------------------------------
// Public Interface
// --------------------------------

export { FirebaseUserFactory };