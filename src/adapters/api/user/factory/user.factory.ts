// --------------------------------
// Requirements
// --------------------------------

import { extname } from 'path';
import { UserCreatePartialModel } from 'src/core/domain/models/user_create_partial.model';
import { UserAggregation } from 'src/core/domain/aggregations/user.aggregation';
import { UserCreateDto } from '../dtos/user_create.dto';
import { UserDto } from '../dtos/user.dto';

// --------------------------------
// Helpers
// --------------------------------

class UserFactory {
  static userEntityToDto({ user, login }: UserAggregation): UserDto {
    return {
      uid: user.uid,
      name: user.name,
      preference: user.preference,
      email: login.email,
      photoUrl: login.photoUrl,
    };
  }

  static createUserDtoToModel(files: Express.Multer.File[], dto: UserCreateDto): UserCreatePartialModel {
    const mainImage = files.find(({ fieldname }) => fieldname === 'image')!;
    const firstImage = files.find(({ fieldname }) => fieldname === 'image1')!;
    const secondImage = files.find(({ fieldname }) => fieldname === 'image2')!;
    const thirdImage = files.find(({ fieldname }) => fieldname === 'image3')!;
    const fourthImage = files.find(({ fieldname }) => fieldname === 'image4')!;
    return {
      keyWord: dto.keyWord,
      name: dto.name,
      password: dto.password,
      preference: dto.preference,
      imageBuffer: mainImage.buffer,
      imageExtension: extname(mainImage.originalname),
      imageBuffer1: firstImage.buffer,
      imageExtension1: extname(firstImage.originalname),
      imageBuffer2: secondImage.buffer,
      imageExtension2: extname(secondImage.originalname),
      imageBuffer3: thirdImage.buffer,
      imageExtension3: extname(thirdImage.originalname),
      imageBuffer4: fourthImage.buffer,
      imageExtension4: extname(fourthImage.originalname),
    };
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { UserFactory };
