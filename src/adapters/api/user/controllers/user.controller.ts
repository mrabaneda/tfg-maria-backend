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
  UseInterceptors,
  UploadedFiles,
  UseGuards,
} from '@nestjs/common';
import { UID } from 'src/core/domain/value_objects/types';
import { CreateUserUseCase } from 'src/core/use_cases/user/create_user.use_case';
import { DeleteUserUseCase } from 'src/core/use_cases/user/delete_user.use_case';
import { GetUsersUseCase } from 'src/core/use_cases/user/get_users.use_case';
import { UserDto } from '../dtos/user.dto';
import { UserCreateDto } from '../dtos/user_create.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { UserFactory } from '../factory/user.factory';
import { UserMiddleware } from '../../middleware/user/user.middleware';
import { AdminMiddleware } from '../../middleware/admin/admin.middleware';

// --------------------------------
// Helpers
// --------------------------------

@UseGuards(UserMiddleware, AdminMiddleware)
@Controller('user')
class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly deleteUserUseCase: DeleteUserUseCase,
    private readonly getUsersUseCase: GetUsersUseCase,
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getUsers(): Promise<UserDto[]> {
    const usersAggregation = await this.getUsersUseCase.execute();
    return usersAggregation.map(UserFactory.userEntityToDto);
  }

  @Delete(':uid')
  @HttpCode(HttpStatus.OK)
  async deleteUser(@Param('uid') uid: UID): Promise<void> {
    return await this.deleteUserUseCase.execute(uid);
  }

  @Post()
  @UseInterceptors(
    AnyFilesInterceptor({
      storage: memoryStorage(),
      fileFilter(_, file, cb) {
        if (!file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
          return cb(new Error('only-images-allowed'), false);
        }
        cb(null, true);
      },
    }),
  )
  @HttpCode(HttpStatus.CREATED)
  async createUser(@UploadedFiles() files: Express.Multer.File[], @Body() userCreateDto: UserCreateDto): Promise<void> {
    return await this.createUserUseCase.execute(UserFactory.createUserDtoToModel(files, userCreateDto));
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { UserController };
