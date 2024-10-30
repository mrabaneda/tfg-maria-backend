// --------------------------------
// Requirements
// --------------------------------

import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { BaseStorageService } from 'src/core/domain/ports/services/storage.service';

// --------------------------------
// Helpers
// --------------------------------

@Injectable()
class CloudStorageService implements BaseStorageService {
  async upload(buffer: Buffer, fullPath: string): Promise<string> {
    const bucket = admin.storage().bucket('tfg-maria-14cce.appspot.com');
    const file = bucket.file(fullPath);
    await file.save(buffer);
    return `https://storage.googleapis.com/tfg-maria-14cce.appspot.com/${fullPath}`;
  }

  async delete(fullPath: string): Promise<void> {
    const bucket = admin.storage().bucket('tfg-maria-14cce.appspot.com');
    const file = bucket.file(fullPath);
    await file.delete();
  }
}

// --------------------------------
// Public Interface
// --------------------------------

export { CloudStorageService };
