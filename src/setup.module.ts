// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// --------------------------------
// Helpers
// --------------------------------

@Module({
    imports: [ConfigModule.forRoot({ envFilePath: '.env.nestjsapi', cache: true })],
})
class SetUpModule { }

// --------------------------------
// Public Interface
// --------------------------------

export { SetUpModule };