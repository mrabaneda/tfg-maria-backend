// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import AuthMiddleware from 'src/middleware/auth/auth.middleware';
import { AuthRepositoryModule } from '../repositories/auth_repository.module';

// --------------------------------
// Helpers
// --------------------------------

@Module({
    imports: [AuthRepositoryModule],
    providers: [
        {
            provide: APP_GUARD,
            useClass: AuthMiddleware,
        },
    ],
})
class AuthMiddlewareModule { }

// --------------------------------
// Public Interface
// --------------------------------

export default AuthMiddlewareModule;