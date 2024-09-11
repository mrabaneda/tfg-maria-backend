// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { UserService } from 'src/application/services/user.service';
import { UserRepositoryModule } from '../repositories/user_repository.module';
import { BaseUserService } from 'src/core/abstract/services/user_service.abstract';

// --------------------------------
// Helpers
// --------------------------------

@Module({
    imports: [UserRepositoryModule],
    providers: [{ provide: BaseUserService, useClass: UserService }],
    exports: [BaseUserService],
})

class UserServiceModule { }

// --------------------------------
// Public Interface
// --------------------------------

export { UserServiceModule };