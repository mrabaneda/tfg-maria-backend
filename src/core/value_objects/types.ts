// --------------------------------
// Requirements
// --------------------------------

import { Request } from 'express';

// --------------------------------
// Helpers
// --------------------------------

type UID = string;

type ImageID = string;

interface IAuthRequest extends Request {
    uid: UID;
}

// --------------------------------
// Public Interface
// --------------------------------

export { UID, ImageID, IAuthRequest };