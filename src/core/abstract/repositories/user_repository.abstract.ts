// --------------------------------
// Requirements
// --------------------------------

import { User } from "src/core/entities/user.entity";

// --------------------------------
// Helpers
// --------------------------------

abstract class BaseUserRepository {
    abstract getAll(): Promise<User[]>;
}

// --------------------------------
// Public Interface
// --------------------------------

export { BaseUserRepository };