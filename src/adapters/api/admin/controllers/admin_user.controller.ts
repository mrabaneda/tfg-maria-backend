// --------------------------------
// Requirements
// --------------------------------

import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Delete,
  Post,
  Param,
  Body,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { CreateAdminUserUseCase } from 'src/core/use_cases/admin/create_admin_user.use_case';
import { DeleteAdminUserUseCase } from 'src/core/use_cases/admin/delete_admin_user.use_case';
import { GetAdminUsersUseCase } from 'src/core/use_cases/admin/get_admin_users.use_case';
import { UID } from 'src/core/domain/value_objects/types';
import { AdminUserCreateDto } from '../dtos/admin_user_create.dto';
import { AdminUserFactory } from '../factory/admin_user.factory';
import { AdminMiddleware } from '../../middleware/admin/admin.middleware';
import { AdminUserDto } from '../dtos/admin_user.dto';
import { UserMiddleware } from '../../middleware/user/user.middleware';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';

// --------------------------------
// Helpers
// --------------------------------

@UseGuards(UserMiddleware, AdminMiddleware)
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
  @UseInterceptors(
    FileInterceptor('image', {      
      storage: memoryStorage(),
      fileFilter(req, file, cb) {
        if (!file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
          return cb(new Error('only-images-allowed'), false);
        }
        cb(null, true);
      },
    }),
  )
  @HttpCode(HttpStatus.CREATED)
  async createAdminUser(
    @UploadedFile() file: Express.Multer.File,
    @Body() adminUserCreateDto: AdminUserCreateDto,
  ): Promise<void> {
    return await this.createAdminUserUseCase.execute(AdminUserFactory.createAdminUserDtoToModel(file, adminUserCreateDto));
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { AdminUserController };
