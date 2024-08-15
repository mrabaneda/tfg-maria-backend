// --------------------------------
// Requirements
// --------------------------------

import {
  Injectable,
  UnauthorizedException,
  CanActivate,
  ExecutionContext,
} from '@nestjs/common';
import { Request } from 'express';
import { BEARER_KEY } from '../helpers/constants';
import { IAuthRequest } from 'src/core/value_objects/types';
import BaseAuthRepository from 'src/core/abstract/repositories/auth_repository.abstract';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class AuthMiddleware implements CanActivate {
  constructor(
    private readonly authRepository: BaseAuthRepository,
  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<IAuthRequest>();
    const token = this.extractTokenFromHeader(request);

    if (!token) throw new UnauthorizedException();

    try {
      request.uid = await this.authRepository.verifyTokenId(token);
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

export default AuthMiddleware;