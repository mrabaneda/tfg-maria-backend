// --------------------------------
// Helpers
// --------------------------------

type CollectionScheme<T> = {
  collectionName: string;
  fields: { [K in keyof T]: K };
};

// --------------------------------
// Public Interface
// --------------------------------

export { CollectionScheme };
