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

  nestApplication.enableCors({ methods: '*', origin: '*' });

  await nestApplication.listen(Number(process.env.PORT!));
})();
