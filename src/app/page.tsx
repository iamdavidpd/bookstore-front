import Link from "next/link"

export default function HomePage(){
  return (
    <main className="p-60 bg-white text-black">
      <div className="grid grid-cols-1 gap-4">
        <h1 className="text-2xl font-bold"> Bienvenido a esta página </h1>

        <Link href="/authors">
          <button className="rounded bg-pink-500 p-2">
            Ir al listado de autores
          </button>
        </Link>

        <Link href="/crear">
          <button className="rounded bg-pink-500 p-2">
            Crear un nuevo autor
          </button>
        </Link>
      </div>
    </main>
  );
}