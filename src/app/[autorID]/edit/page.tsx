import Link from "next/link";

export default async function EditAutorPage ({
    params,
}: {
    params: { autorID: string };
}) {
    const { autorID } = await params;

    return (
        <main className="container mx-auto p-8 bg-white text-black">
            <h1 className="text-3xl font-bold">
                Edicion de Autor con ID: { autorID }
            </h1>

            <Link href="/" className="inline-block mb-6">
                <button className="rounded bg-pink-500 p-2">
                Back to home
                </button>
            </Link>
        </main>
    );
}