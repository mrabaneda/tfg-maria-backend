// --------------------------------
// Requirements
// --------------------------------

import { Injectable } from '@nestjs/common';
import { UID } from 'src/core/domain/value_objects/types';
import { LoginEntity } from 'src/core/domain/entities/login.entity';
import { BaseLoginRepository } from 'src/core/domain/ports/repositories/login.repository';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class GetLoginUserUseCase {
  constructor(private readonly loginRepository: BaseLoginRepository) {}

  async execute(uid: UID): Promise<LoginEntity> {
    return await this.loginRepository.getOneOrFail(uid);
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { GetLoginUserUseCase };
