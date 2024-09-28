// --------------------------------
// Requirements
// --------------------------------

import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as admin from 'firebase-admin';
import * as serviceAccount from 'service_account.json';

// --------------------------------
// Helpers
// --------------------------------

class SetupService implements OnModuleInit {
  onModuleInit() {
    // TODO: Importante retirar antes de la subida a prod
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }
}

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  providers: [SetupService],
  exports: [SetupService],
})
class SetUpModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { SetUpModule };
