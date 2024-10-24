// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { SetUpModule } from './setup.module';
import { AdminUserControllerModule } from './adapters/infrastructure/di/controllers/admin_user_controller.module';
import { UserControllerModule } from './adapters/infrastructure/di/controllers/user_controller.module';
import { LoginControllerModule } from './adapters/infrastructure/di/controllers/login_controller.module';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  imports: [SetUpModule, AdminUserControllerModule, UserControllerModule, LoginControllerModule],
})
class AppModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { AppModule };
