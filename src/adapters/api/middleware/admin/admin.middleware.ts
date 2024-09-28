// --------------------------------
// Requirements
// --------------------------------

import { Injectable, UnauthorizedException, CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { VerifyTokenUseCase } from 'src/core/application/use_cases/verify_token.use_case';
import { GetAdminUserUseCase } from 'src/core/application/use_cases/get_admin_user.use_case';
import { AuthRequest } from '../../models/auth_request.model';
import { BEARER_KEY } from '../helpers/constants';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class AdminMiddleware implements CanActivate {
  constructor(
    private readonly verifyTokenUseCase: VerifyTokenUseCase,
    private readonly getAdminUserUseCase: GetAdminUserUseCase,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<AuthRequest>();
    const token = this.extractTokenFromHeader(request);

    if (!token) throw new UnauthorizedException();

    try {
      const uid = await this.verifyTokenUseCase.execute(token);

      const adminUser = await this.getAdminUserUseCase.execute(uid);

      if (!adminUser.isAdmin) {
        return false;
      }

      request.uid = uid;
    } catch (error) {
      throw new UnauthorizedException();
    }

    return true;
  }

  private extractTokenFromHeader(request: Request): string | null {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === BEARER_KEY ? token : null;
  }
}

// --------------------------------
// Public Interface
// -------------------------------

export { AdminMiddleware };
