// --------------------------------
// Requirements
// --------------------------------

import { ErrorMessages } from "./errors";


// --------------------------------
// Helpers
// --------------------------------

class ValidationError extends Error {
    constructor(message: ErrorMessages) {
        super(message);
    }
}

// --------------------------------
// Public Interface
// -------------------------------

export default ValidationError;