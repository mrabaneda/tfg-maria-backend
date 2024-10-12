// --------------------------------
// Requirements
// --------------------------------

import { Injectable } from '@nestjs/common';
import { DecodedAuthUserModel } from 'src/core/domain/models/decoded_auth_user.model';
import { BaseAuthService } from 'src/core/domain/ports/services/auth.service.';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class VerifyTokenUseCase {
  constructor(private readonly authService: BaseAuthService) {}

  async execute(token: string): Promise<DecodedAuthUserModel> {
    return await this.authService.verifyToken(token);
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { VerifyTokenUseCase };
