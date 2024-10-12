// --------------------------------
// Requirements
// --------------------------------

import { LoginEntity } from '../entities/login.entity';
import { UserEntity } from '../entities/user.entity';

// --------------------------------
// Helpers
// --------------------------------

interface UserAggregation {
  readonly user: UserEntity;
  readonly login: LoginEntity;  
}

// --------------------------------
// Public Interface
// --------------------------------

export { UserAggregation };
