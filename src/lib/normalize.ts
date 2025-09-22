import type { ApiAuthor } from "./api-types";
import type { Author } from "./types";

export function normalizeAuthor(a: ApiAuthor): Author {
  return {
    id: a.id,
    name: a.name,
    imageURL: a.image,
    birthDate: a.birthDate,
    description: a.description,
    books: Array.isArray(a.books) ? a.books.length : 0,
    prizes: Array.isArray(a.prizes) ? a.prizes.length : 0,
  };
}