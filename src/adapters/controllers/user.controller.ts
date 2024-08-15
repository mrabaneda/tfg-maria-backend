// --------------------------------
// Requirements
// --------------------------------

import { handleException } from 'src/helpers/utils';
import { User } from 'src/core/entities/user.entity';
import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { BaseGetAllUsersUseCase } from 'src/core/abstract/use_cases/get_all_users_use_case.abstract';

// --------------------------------
// Helpers
// --------------------------------

@Controller('users')
class UserController {
    constructor(private readonly getAllUsersUseCases: BaseGetAllUsersUseCase) { }

    @Get('getAll')
    @HttpCode(HttpStatus.OK)
    getAllUsers(): Promise<User[]> {
        try {
            return this.getAllUsersUseCases.getAll();
        } catch (error) {
            handleException(error);
        }
    }
}

// --------------------------------
// Public Interface
// --------------------------------

export { UserController };