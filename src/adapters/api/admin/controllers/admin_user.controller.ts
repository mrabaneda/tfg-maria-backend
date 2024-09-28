// --------------------------------
// Requirements
// --------------------------------

import { Controller, Get, HttpCode, HttpStatus, Delete, Post, Param, Body, UseGuards } from '@nestjs/common';
import { AdminUserEntity } from 'src/core/domain/entities/admin_user.entity';
import { CreateAdminUserUseCase } from 'src/core/application/use_cases/create_admin_user.use_case';
import { DeleteAdminUserUseCase } from 'src/core/application/use_cases/delete_admin_user.use_case';
import { GetAdminUsersUseCase } from 'src/core/application/use_cases/get_admin_users.use_case';
import { UID } from 'src/core/domain/value_objects/types';
import { AdminUserCreateDto } from '../dtos/admin_user_create.dto';
import { AdminUserFactory } from '../factory/admin_user.factory';
import { AdminMiddleware } from '../../middleware/admin/admin.middleware';
import { AdminUserDto } from '../dtos/admin_user.dto';

// --------------------------------
// Helpers
// --------------------------------

//@UseGuards(AdminMiddleware)
@Controller('admin')
class AdminUserController {
  constructor(
    private readonly createAdminUserUseCase: CreateAdminUserUseCase,
    private readonly deleteAdminUserUseCase: DeleteAdminUserUseCase,
    private readonly getAdminUsersUseCase: GetAdminUsersUseCase,
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getAdminUsers(): Promise<AdminUserDto[]> {
    const adminUsers = await this.getAdminUsersUseCase.execute();
    return adminUsers.map(AdminUserFactory.adminUserEntityToDto);
  }

  @Delete(':uid')
  @HttpCode(HttpStatus.OK)
  async deleteAdminUser(@Param('uid') uid: UID): Promise<void> {
    return await this.deleteAdminUserUseCase.execute(uid);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createAdminUser(@Body() adminUserCreateDto: AdminUserCreateDto): Promise<void> {
    return await this.createAdminUserUseCase.execute(AdminUserFactory.createAdminUserDtoToModel(adminUserCreateDto));
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { AdminUserController };
