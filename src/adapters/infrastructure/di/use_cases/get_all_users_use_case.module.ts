// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { UserServiceModule } from '../services/user_service.module';
import { GetAllUsersUseCase } from 'src/core/application/use_cases/get_all_users_use_case';

// --------------------------------
// Helpers
// --------------------------------

@Module({
    imports: [UserServiceModule],
    providers: [GetAllUsersUseCase],
    exports: [GetAllUsersUseCase],
})
class GetAllUsersUseCasesModule { }

// --------------------------------
// Public Interface
// --------------------------------

export { GetAllUsersUseCasesModule };