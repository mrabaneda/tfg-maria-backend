// --------------------------------
// Requirements
// --------------------------------

import { UserEntity } from "src/core/entities/user.entity";

// --------------------------------
// Helpers
// --------------------------------

abstract class BaseUserRepository {
    abstract getAll(): Promise<UserEntity[]>;
}

// --------------------------------
// Public Interface
// --------------------------------

export { BaseUserRepository };