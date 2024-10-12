// --------------------------------
// Helpers
// --------------------------------

abstract class BaseStorageService {
  abstract upload(buffer: Buffer, fullPath: string): Promise<string>;
  abstract delete(fullPath: string): Promise<void>;
}

// --------------------------------
// Public Interface
// --------------------------------

export { BaseStorageService };
