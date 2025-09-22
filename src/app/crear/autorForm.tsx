"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { autorSchema, AutorFormData } from '../../lib/autorSchema';

interface AutorFormProps {
    onSubmit: SubmitHandler<AutorFormData>;
    defaultValues?: AutorFormData;
    isSubmitting: boolean;
}

export default function AutorForm({
    onSubmit,
    defaultValues,
    isSubmitting,
}: AutorFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AutorFormData>({
        resolver: zodResolver(autorSchema),
        defaultValues: {
            ...defaultValues,
        },
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <label htmlFor="name" className="block font-medium">
                    Autor Name
                </label>
                <input
                    id="name"
                    {...register("name")}
                    className="w-full p-2 border rounded"
                />
                {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
            </div>

            <div>
                <label htmlFor="description" className="block font-medium">
                    Description
                </label>
                <input
                    id="description"
                    {...register("description")}
                    className="w-full p-2 border rounded"
                />
                {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.description?.message}</p>
                )}
            </div>

            <div>
                <label htmlFor="image" className="block font-medium">
                    URL de la imagen
                </label>
                <input
                    id="image"
                    {...register("image")}
                    className="w-full p-2 border rounded"
                />
                {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.image?.message}</p>
                )}
            </div>

            <div>
                <label htmlFor="birthDate" className="block font-medium">
                    Fecha de nacimiento del autor
                </label>
                <input
                    id="birthDate"
                    {...register("birthDate")}
                    className="w-full p-2 border rounded"
                />
                {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.birthDate?.message}</p>
                )}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="bg-pink-500 text-black font-bold py-2 px-6 rounded hover:bg-pink-500 disabled:bg-gray-300">
                    {isSubmitting ? "Saving..." : "Save Autor"}
            </button>
        </form>
    );
}