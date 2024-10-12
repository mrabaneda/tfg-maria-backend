// --------------------------------
// Helpers
// --------------------------------

interface AdminUserCreatePartialModel {
  readonly email: string;
  readonly name: string;
  readonly password: string;
  readonly imageBuffer: Buffer;
  readonly imageExtension: string;
}

// --------------------------------
// Public Interface
// --------------------------------

export { AdminUserCreatePartialModel };
