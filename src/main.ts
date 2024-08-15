// --------------------------------
// Requirements
// --------------------------------

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { checkEnviroment } from './helpers/utils';

// --------------------------------
// Public Interface
// --------------------------------

(async () => {
  const nestApplication = await NestFactory.create(AppModule);

  checkEnviroment();

  nestApplication.enableCors({ credentials: true, methods: '*', origin: '*' });

  await nestApplication.listen(Number(process.env.PORT!));
})();