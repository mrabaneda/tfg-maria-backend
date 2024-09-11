// --------------------------------
// Requirements
// --------------------------------

import { UserEntity } from 'src/core/entities/user.entity';
import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { GetAllUsersUseCase } from 'src/application/use_cases/get_all_users_use_case';

// --------------------------------
// Helpers
// --------------------------------

@Controller('users')
class UserController {
    constructor(private readonly getAllUsersUseCases: GetAllUsersUseCase) { }

    @Get('getAll')
    @HttpCode(HttpStatus.OK)
    async getAllUsers(): Promise<UserEntity[]> {
        try {
            return await this.getAllUsersUseCases.execute();
        } catch (error) {
            throw (error);
        }
    }
}

// --------------------------------
// Public Interface
// --------------------------------

export { UserController };