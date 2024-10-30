// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { BaseAuthService } from 'src/core/domain/ports/services/auth.service.';
import { FirebaseAuthService } from '../../frameworks/firebase_auth/services/firebase_auth.service';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  providers: [{ provide: BaseAuthService, useClass: FirebaseAuthService }],
  exports: [BaseAuthService],
})
class AuthServiceModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { AuthServiceModule };
