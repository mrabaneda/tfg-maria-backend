// --------------------------------
// Requirements
// --------------------------------

import { Injectable } from '@nestjs/common';
import { UID } from 'src/core/domain/value_objects/types';
import { BaseUserRepository } from 'src/core/domain/ports/repositories/user.repository';
import { UserAggregation } from 'src/core/domain/aggregations/user.aggregation';
import { BaseLoginRepository } from 'src/core/domain/ports/repositories/login.repository';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class GetUserUseCase {
  constructor(
    private readonly userRepository: BaseUserRepository,
    private readonly loginRepository: BaseLoginRepository,
  ) {}

  async execute(uid: UID): Promise<UserAggregation> {
    const [userEntity, loginEntity] = await Promise.all([
      this.userRepository.getOneOrFail(uid),
      this.loginRepository.getOneOrFail(uid),
    ]);

    return {
      login: loginEntity,
      user: userEntity,
    };
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { GetUserUseCase };
