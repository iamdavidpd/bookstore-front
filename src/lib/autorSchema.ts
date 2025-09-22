import { z } from "zod";

export const autorSchema = z.object({
    name: z
        .string()
        .min(3, { message: "Name must be at least 3 characters long." }),

    description: z
        .string()
        .min(10, { message: "Description must be at least 10 characters long." }),

    image: z
        .string()
        .min(10, { message: "Images must be at least 10 characters long." }),

    birthDate: z
        .string()
        .min(10, { message: "BirthDate must have AAAA-MM-DD format" }),
});