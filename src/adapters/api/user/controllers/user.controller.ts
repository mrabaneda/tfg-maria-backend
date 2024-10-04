// --------------------------------
// Requirements
// --------------------------------

import { Controller, Get, HttpCode, HttpStatus, Delete, Post, Param, Body, UseGuards } from '@nestjs/common';
import { UID } from 'src/core/domain/value_objects/types';
import { CreateUserUseCase } from 'src/core/application/use_cases/user/create_user.use_case';
import { DeleteUserUseCase } from 'src/core/application/use_cases/user/delete_user.use_case';
import { GetUsersUseCase } from 'src/core/application/use_cases/user/get_users.use_case';
import { UserDto } from '../dtos/user.dto';
import { UserCreateDto } from '../dtos/user_create.dto';
import { UserFactory } from '../factory/user.factory';
import { AdminMiddleware } from '../../middleware/admin/admin.middleware';
import { UserMiddleware } from '../../middleware/user/user.middleware';

// --------------------------------
// Helpers
// --------------------------------

// @UseGuards(AdminMiddleware) // TODO: uncomment when try form front
@Controller('user')
class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly deleteUserUseCase: DeleteUserUseCase,
    private readonly getUsersUseCase: GetUsersUseCase,
  ) {}

  // @UseGuards(UserMiddleware) // TODO: uncomment when try form front
  @Get()
  @HttpCode(HttpStatus.OK)
  async getUsers(): Promise<UserDto[]> {
    const users = await this.getUsersUseCase.execute();
    return users.map(UserFactory.userEntityToDto);
  }

  @Delete(':uid')
  @HttpCode(HttpStatus.OK)
  async deleteUser(@Param('uid') uid: UID): Promise<void> {
    return await this.deleteUserUseCase.execute(uid);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() userCreateDto: UserCreateDto): Promise<void> {
    return await this.createUserUseCase.execute(UserFactory.createUserDtoToModel(userCreateDto));
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { UserController };
