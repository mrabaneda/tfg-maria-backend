// --------------------------------
// Requirements
// --------------------------------

import { Controller, Get, HttpCode, HttpStatus, Param, UseGuards } from '@nestjs/common';
import { UID } from 'src/core/domain/value_objects/types';
import { GetLoginUserUseCase } from 'src/core/use_cases/login/get_login_user.use_case';
import { LoginDto } from '../dtos/login.dto';
import { LoginFactory } from '../factory/login.factory';
import { UserMiddleware } from '../../middleware/user/user.middleware';
import { AdminMiddleware } from '../../middleware/admin/admin.middleware';

// --------------------------------
// Helpers
// --------------------------------

@Controller('login')
@UseGuards(UserMiddleware, AdminMiddleware)
class LoginController {
  constructor(private readonly getLoginUserUseCase: GetLoginUserUseCase) {}

  @Get(':uid')
  @HttpCode(HttpStatus.OK)
  async getLoginUser(@Param('uid') uid: UID): Promise<LoginDto> {
    const loginEntity = await this.getLoginUserUseCase.execute(uid);
    return LoginFactory.loginEntityToDto(loginEntity);
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { LoginController };
