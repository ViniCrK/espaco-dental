import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <header className="flex h-[90px] px-24 bg-slate-950">
        <div className="flex items-center justify-between w-full">
          <figure>
            <img className="h-[60px] w-[60px] rounded-lg" src="" alt="Logo" />
          </figure>

          <nav className="flex gap-4">
            <Link
              className="text-white text-lg font-normal hover:text-yellow-300"
              to=""
            >
              Início
            </Link>

            <Link
              className="text-white text-lg font-normal hover:text-yellow-300"
              to="consultas"
            >
              Consultas
            </Link>

            <Link
              className="text-white text-lg font-normal hover:text-yellow-300"
              to="pacientes"
            >
              Pacientes
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
