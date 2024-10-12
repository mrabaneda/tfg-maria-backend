// --------------------------------
// Requirements
// --------------------------------

import { Request } from 'express';
import { Injectable, UnauthorizedException, CanActivate, ExecutionContext } from '@nestjs/common';
import { BEARER_KEY } from '../helpers/constants';
import { AuthRequest } from '../../models/auth_request.model';
import { VerifyTokenUseCase } from 'src/core/use_cases/auth/verify_token.use_case';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class UserMiddleware implements CanActivate {
  constructor(private readonly verifyTokenUseCase: VerifyTokenUseCase) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    const token = this._extractTokenFromHeader(request);

    if (!token) throw new UnauthorizedException();

    try {
      const { uid, isAdmin } = await this.verifyTokenUseCase.execute(token);
      request.uid = uid;
      request.isAdmin = isAdmin;
    } catch (_) {
      throw new UnauthorizedException();
    }
    
    return true;
  }

  private _extractTokenFromHeader(request: Request): string | null {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === BEARER_KEY ? token : null;
  }
}

// --------------------------------
// Public Interface
// -------------------------------

export { UserMiddleware };
