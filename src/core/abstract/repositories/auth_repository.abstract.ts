// --------------------------------
// Requirements
// --------------------------------

import { UID } from "src/core/value_objects/types";

// --------------------------------
// Helpers
// --------------------------------

abstract class BaseAuthRepository {
    abstract verifyTokenId(token: string): Promise<UID>;
}

// --------------------------------
// Public Interface
// --------------------------------

export default BaseAuthRepository;