// --------------------------------
// Requirements
// --------------------------------

import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { UserCreatePartialModel } from 'src/core/domain/models/user_create_partial.model';
import { BaseLoginRepository } from 'src/core/domain/ports/repositories/login.repository';
import { BaseUserRepository } from 'src/core/domain/ports/repositories/user.repository';
import { BaseAuthService } from 'src/core/domain/ports/services/auth.service.';
import { BaseStorageService } from 'src/core/domain/ports/services/storage.service';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class CreateUserUseCase {
  constructor(
    private readonly userRepository: BaseUserRepository,
    private readonly loginRepository: BaseLoginRepository,
    private readonly authService: BaseAuthService,
    private readonly storageService: BaseStorageService,
  ) {}

  async execute(createModel: UserCreatePartialModel): Promise<void> {
    const photoName = randomUUID();
    const photoName1 = randomUUID();
    const photoName2 = randomUUID();
    const photoName3 = randomUUID();
    const photoName4 = randomUUID();

    const imageRelativePath = `user_images/${createModel.keyWord}`;

    const userEmail = `${createModel.keyWord}@vale.fake`;

    const [photoUrl, photoUrl1, photoUrl2, photoUrl3, photoUrl4] = await Promise.all([
      this.storageService.upload(
        createModel.imageBuffer,
        `${imageRelativePath}/${photoName}${createModel.imageExtension}`,
      ),
      this.storageService.upload(
        createModel.imageBuffer1,
        `${imageRelativePath}/${photoName1}${createModel.imageExtension1}`,
      ),
      this.storageService.upload(
        createModel.imageBuffer2,
        `${imageRelativePath}/${photoName2}${createModel.imageExtension2}`,
      ),
      this.storageService.upload(
        createModel.imageBuffer3,
        `${imageRelativePath}/${photoName3}${createModel.imageExtension3}`,
      ),
      this.storageService.upload(
        createModel.imageBuffer4,
        `${imageRelativePath}/${photoName4}${createModel.imageExtension4}`,
      ),
    ]);

    const uid = await this.authService.create({
      name: createModel.name,
      email: userEmail,
      password: createModel.password,
      photoUrl: photoUrl,
      isAdmin: false,
    });

    await Promise.all([
      this.userRepository.create({
        uid: uid,
        name: createModel.name,
        preference: createModel.preference,
      }),
      this.loginRepository.create({
        uid: uid,
        email: userEmail,
        photoUrl: photoUrl,
        photoName: `${photoName}${createModel.imageExtension}`,
        photoRelativePath: imageRelativePath,
        passwordModel: [
          {
            photoUrl: photoUrl1,
            passwordPiece: createModel.password.at(0)!,
            photoName: `${photoName1}${createModel.imageExtension1}`,
            photoRelativePath: imageRelativePath,
          },
          {
            photoUrl: photoUrl2,
            passwordPiece: createModel.password.at(1)!,
            photoName: `${photoName2}${createModel.imageExtension2}`,
            photoRelativePath: imageRelativePath,
          },
          {
            photoUrl: photoUrl3,
            passwordPiece: createModel.password.at(2)!,
            photoName: `${photoName3}${createModel.imageExtension3}`,
            photoRelativePath: imageRelativePath,
          },
          {
            photoUrl: photoUrl4,
            passwordPiece: createModel.password.substring(3, createModel.password.length),
            photoName: `${photoName4}${createModel.imageExtension4}`,
            photoRelativePath: imageRelativePath,
          },
        ],
      }),
    ]);
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { CreateUserUseCase };
