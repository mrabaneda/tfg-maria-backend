// --------------------------------
// Requirements
// --------------------------------

import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

// --------------------------------
// Public Interface
// --------------------------------

(async () => {
  const nestApplication = await NestFactory.create(AppModule);

  nestApplication.enableCors({ methods: '*', credentials: true, origin: process.env.WHITE_LIST!.split(';') });

  await nestApplication.listen(Number(process.env.PORT!));
})();
