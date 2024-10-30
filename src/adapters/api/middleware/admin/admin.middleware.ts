// --------------------------------
// Requirements
// --------------------------------

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthRequest } from '../../models/auth_request.model';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class AdminMiddleware implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<AuthRequest>();
    return request.isAdmin;
  }
}

// --------------------------------
// Public Interface
// -------------------------------

export { AdminMiddleware };
