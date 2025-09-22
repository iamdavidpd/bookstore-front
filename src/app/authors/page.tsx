"use client";

import { useEffect, useState } from "react";
import type { ApiAuthor } from "@/lib/api-types";
import type { Author } from "@/lib/types";
import { normalizeAuthor } from "@/lib/normalize";

export default function AuthorsPage(){
    const [authors, setAuthors] = useState<Author[]>([]);

    useEffect(() => {
        fetch("/api/authors")
        .then((r) => r.json())
        .then((data: ApiAuthor[]) => data.map(normalizeAuthor))
        .then(setAuthors)
        .catch(console.error);
    }, []);
    
    return (
        <main className="p-8 bg-black min-h-dvh text-white">
      <h2 className="text-2xl mb-6">Autores</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {authors.map((a) => (
          <article key={a.id} className="rounded-2xl bg-neutral-900 p-4">
            <img
              src={a.imageURL}
              alt={a.name}
              className="w-full h-48 object-cover rounded-xl mb-3"
            />
            <h3 className="text-lg font-semibold">{a.name}</h3>
            <p className="text-sm text-neutral-300">Nació: {a.birthdate}</p>
            <p className="text-sm mt-2 line-clamp-3">{a.description}</p>
            <div className="mt-3 text-sm text-neutral-400">
              📚 Libros: {a.books} · 🏅 Premios: {a.prizes}
            </div>
          </article>
        ))}
      </div>
    </main>
    );
}