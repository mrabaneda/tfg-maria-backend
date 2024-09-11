// --------------------------------
// Requirements
// --------------------------------

import { AdminUserEntity } from "src/core/entities/admin_user.entity";

// --------------------------------
// Helpers
// --------------------------------

abstract class BaseAdminUserRepository {
    abstract getAll(): Promise<AdminUserEntity[]>;
}

// --------------------------------
// Public Interface
// --------------------------------

export { BaseAdminUserRepository };