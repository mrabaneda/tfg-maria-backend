// --------------------------------
// Requirements
// --------------------------------

import { User } from "src/core/entities/user.entity";

// --------------------------------
// Helpers
// --------------------------------

abstract class BaseGetAllUsersUseCase {
    abstract getAll(): Promise<User[]>;
}

// --------------------------------
// Public Interface
// --------------------------------

export { BaseGetAllUsersUseCase };