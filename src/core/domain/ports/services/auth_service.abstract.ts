// --------------------------------
// Requirements
// --------------------------------

import { UID } from '../../value_objects/types';

// --------------------------------
// Helpers
// --------------------------------

abstract class BaseAuthService {
  abstract verifyTokenId(token: string): Promise<UID>;
}

// --------------------------------
// Public Interface
// --------------------------------

export default BaseAuthService;
