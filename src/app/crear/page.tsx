import Link from "next/link";

export default function CrearPage(){
return (
    <main className="container mx-auto p-8 bg-white text-black">
        <h1 className="text-3xl font-bold">Crear Nuevo autor</h1>

        <Link href="/" className="inline-block mb-6">
            <button className="rounded bg-pink-500 p-2">
            Back to home
            </button>
        </Link>
    </main>

    );
}