// --------------------------------
// Requirements
// --------------------------------

import { Request } from 'express';
import { Injectable, UnauthorizedException, CanActivate, ExecutionContext } from '@nestjs/common';
import { BEARER_KEY } from '../helpers/constants';
import { AuthRequest } from '../../models/auth_request.model';
import { GetUserUseCase } from 'src/core/application/use_cases/user/get_user.use_case';
import { VerifyUserTokenUseCase } from 'src/core/application/use_cases/user/verify_user_token.use_case';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class UserMiddleware implements CanActivate {
  constructor(
    private readonly verifyTokenUseCase: VerifyUserTokenUseCase,
    private readonly getUserUseCase: GetUserUseCase,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<AuthRequest>();
    const token = this._extractTokenFromHeader(request);

    if (!token) throw new UnauthorizedException();

    try {
      const uid = await this.verifyTokenUseCase.execute(token);
      const user = await this.getUserUseCase.execute(uid);

      if (!user.preference) {
        return false;
      }

      request.uid = uid;
    } catch (error) {
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
