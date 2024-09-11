// --------------------------------
// Requirements
// --------------------------------

import { AdminUserEntity } from "src/core/entities/admin_user.entity";

// --------------------------------
// Helpers
// --------------------------------

abstract class BaseAdminUserService {
    abstract get(): Promise<AdminUserEntity[]>;
}

// --------------------------------
// Public Interface
// --------------------------------

export { BaseAdminUserService };