// --------------------------------
// Requirements
// --------------------------------

import { Module } from '@nestjs/common';
import { BaseStorageService } from 'src/core/domain/ports/services/storage.service';
import { CloudStorageService } from '../../frameworks/cloud_storage/cloud_storage.service';

// --------------------------------
// Helpers
// --------------------------------

@Module({
  providers: [{ provide: BaseStorageService, useClass: CloudStorageService }],
  exports: [BaseStorageService],
})
class StorageServiceModule {}

// --------------------------------
// Public Interface
// --------------------------------

export { StorageServiceModule };
