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

  if (!process.env.PORT) throw new Error('PORT is not defined in .env file');
  if (!process.env.PROJECT_ID) throw new Error('PROJECT_ID is not defined in .env file');
  if (!process.env.CLIENT_EMAIL) throw new Error('CLIENT_EMAIL is not defined in .env file');
  if (!process.env.PRIVATE_KEY) throw new Error('PRIVATE_KEY is not defined in .env file');


  nestApplication.enableCors({ credentials: true, methods: '*', origin: '*' });

  await nestApplication.listen(Number(process.env.PORT!));
})();