export type ApiBook = {
    id: number;
    name: string;
    isbn: string;
    image: string;
    publishingDate: string;
    description: string;
    editorial: {id: number; name: string};
};

export type ApiPrize = {
    id: number;
    premiationDate: string;
    name: string;
    description: string;
    organization: {id: number; name: string; tipo: string};
};

export type ApiAuthor = {
    id: number;
    birthDate: string;
    name: string;
    description: string;
    image: string;
    books: ApiBook[];
    prizes: ApiPrize[];
};