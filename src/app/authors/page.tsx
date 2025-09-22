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
        <main className="p-8 bg-white text-black">
            <h2 className="text-2xl mb-6">Autores</h2>
            <div className="grid grid-cols-3 gap-4">
                {authors.map((a) => (
                <article key={a.id} className="rounded-2xl bg-pink-300 p-4">
            
                <h3 className="text-lg font-semibold">{a.name}</h3>
                <p className="text-sm">Nació: {a.birthDate}</p>
                <p className="text-sm mt-2 line-clamp-3">{a.description}</p>
                <div className="mt-3 text-sm">
                📚 Libros: {a.books} · 🏅 Premios: {a.prizes}
                </div>
                </article>
                ))}
            </div>
        </main>
    );
}