// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { SetUpModule } from './setup.module';
import AdminUserControllerModule from './adapters/infrastructure/di/controllers/admin_user_controller.module';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  imports: [SetUpModule, AdminUserControllerModule],
})
class AppModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { AppModule };
