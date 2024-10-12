// --------------------------------
// Requirements
// --------------------------------

import { Injectable } from '@nestjs/common';
import { UserAggregation } from 'src/core/domain/aggregations/user.aggregation';
import { UserEntity } from 'src/core/domain/entities/user.entity';
import { BaseLoginRepository } from 'src/core/domain/ports/repositories/login.repository';
import { BaseUserRepository } from 'src/core/domain/ports/repositories/user.repository';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class GetUsersUseCase {
  constructor(
    private readonly userRepository: BaseUserRepository,
    private readonly loginRepository: BaseLoginRepository,
  ) {}

  async execute(): Promise<UserAggregation[]> {
    const [users, logins] = await Promise.all([this.userRepository.get(), this.loginRepository.get()]);

    if (users.length !== logins.length) throw new Error('Este error no se deberia de producir nunca');

    const loginMap = new Map(logins.map((login) => [login.uid, login]));

    return users.map((user) => {
      const login = loginMap.get(user.uid);
      if (!login) {
        throw new Error(`No se encontró el login correspondiente para el usuario ${user.uid}`);
      }
      return {
        user,
        login,
      } satisfies UserAggregation;
    });
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { GetUsersUseCase };
