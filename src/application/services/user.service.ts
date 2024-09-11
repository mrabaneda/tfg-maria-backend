// --------------------------------
// Requirements
// --------------------------------

import { Injectable } from "@nestjs/common";
import { UserEntity } from "src/core/entities/user.entity";
import { BaseUserService } from "src/core/abstract/services/user_service.abstract";
import { BaseUserRepository } from "src/core/abstract/repositories/user_repository.abstract";


// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class UserService implements BaseUserService {

    constructor(
        private readonly userRepository: BaseUserRepository,
    ) { }

    async getAll(): Promise<UserEntity[]> {
        return this.userRepository.getAll();
    }
}

// --------------------------------
// Public Interface
// --------------------------------

export { UserService };