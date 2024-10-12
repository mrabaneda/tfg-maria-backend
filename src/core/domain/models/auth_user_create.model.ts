// --------------------------------
// Helpers
// --------------------------------

interface AuthUserCreateModel {
  readonly email: string;
  readonly password: string;
  readonly name: string;
  readonly photoUrl: string;
  readonly isAdmin: boolean;
}

// --------------------------------
// Public Interface
// --------------------------------

export { AuthUserCreateModel };
