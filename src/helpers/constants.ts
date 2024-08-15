// --------------------------------
// Helpers
// --------------------------------

type DocumentScheme<T> = {
    fields: { [K in keyof T]: string };
};

// --------------------------------
// Public Interface
// --------------------------------

export { DocumentScheme };