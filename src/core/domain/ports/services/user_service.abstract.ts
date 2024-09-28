// --------------------------------
// Requirements
// --------------------------------

import { UserEntity } from "src/core/domain/entities/user.entity";

// --------------------------------
// Helpers
// --------------------------------

abstract class BaseUserService {
    abstract getAll(): Promise<UserEntity[]>;
}

// --------------------------------
// Public Interface
// --------------------------------

export { BaseUserService };