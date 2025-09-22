"use client";

import { useState } from "react";
import AutorForm from "./autorForm";
import { AutorFormData } from "@/lib/autorSchema";
import Link from "next/link";


export default function CrearPage(){
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleCreateAutor = async (data: AutorFormData) => {
        setIsSubmitting(true);
        console.log("Data to submit:", data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSubmitting(false);
    };

    return (
    <div className="container mx-auto p-8">
    <h1 className="text-3xl font-bold mb-6">Crear Nuevo Autor</h1>
    <Link href="/" className="inline-block mb-6">
        <button className="rounded bg-pink-500 p-2">
            Back to home
        </button>
    </Link>
    
    <AutorForm onSubmit={handleCreateAutor} isSubmitting={isSubmitting} />
    </div>
    )
}