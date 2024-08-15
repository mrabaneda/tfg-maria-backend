// --------------------------------
// Requirements
// --------------------------------

import {
    BadRequestException,
    InternalServerErrorException,
} from '@nestjs/common/exceptions';
import ValidationError from 'src/exceptions/validation_error';

// --------------------------------
// Helpers
// --------------------------------

const handleException = (err: any): never => {
    if (err instanceof ValidationError) {
        throw new BadRequestException(err.message);
    }
    throw new InternalServerErrorException(err.message);
};


const checkEnviroment = () => {
    if (!process.env.PORT) throw new Error('PORT is not defined in .env file');
    if (!process.env.PROJECT_ID) throw new Error('PROJECT_ID is not defined in .env file');
    if (!process.env.CLIENT_EMAIL) throw new Error('CLIENT_EMAIL is not defined in .env file');
    if (!process.env.PRIVATE_KEY) throw new Error('PRIVATE_KEY is not defined in .env file');
};

// --------------------------------
// Public Interface
// --------------------------------

export { handleException, checkEnviroment };