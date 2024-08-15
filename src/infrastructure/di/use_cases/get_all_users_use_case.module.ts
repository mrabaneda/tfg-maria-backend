// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { UserRepositoryModule } from '../repositories/user_repository.module';
import { BaseGetAllUsersUseCase } from 'src/core/abstract/use_cases/get_all_users_use_case.abstract';
import { GetAllUsersUseCases } from 'src/application/use_cases/get_all_users_use_cases';

// --------------------------------
// Helpers
// --------------------------------

@Module({
    imports: [
        UserRepositoryModule,
    ],
    providers: [{ provide: BaseGetAllUsersUseCase, useClass: GetAllUsersUseCases }],
    exports: [BaseGetAllUsersUseCase],
})
class GetAllUsersUseCasesModule { }

// --------------------------------
// Public Interface
// --------------------------------

export { GetAllUsersUseCasesModule };