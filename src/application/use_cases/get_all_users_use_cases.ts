// --------------------------------
// Requirements
// --------------------------------

import { Injectable } from '@nestjs/common';
import { User } from 'src/core/entities/user.entity';
import { BaseUserRepository } from 'src/core/abstract/repositories/user_repository.abstract';
import { BaseGetAllUsersUseCase } from 'src/core/abstract/use_cases/get_all_users_use_case.abstract';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class GetAllUsersUseCases implements BaseGetAllUsersUseCase {

    constructor(
        private readonly userRepository: BaseUserRepository,
    ) { }

    getAll(): Promise<User[]> {
        return this.userRepository.getAll();
    }
}

// --------------------------------
// Public Interface
// --------------------------------

export { GetAllUsersUseCases };