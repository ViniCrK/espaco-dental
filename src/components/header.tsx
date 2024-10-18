import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <header className="flex h-[90px] px-24 bg-slate-950">
        <div className="flex items-center justify-between w-full">
          <figure>
            <Link to="">
              <img
                className="h-[60px] w-[60px] rounded-lg"
                src="src\assets\espaco-dental-logo.jpg"
                alt="Logo"
              />
            </Link>
          </figure>

          <nav className="flex gap-4">
            <Link
              className="text-white text-lg font-normal hover:text-yellow-400"
              to=""
            >
              Início
            </Link>

            <Link
              className="text-white text-lg font-normal hover:text-yellow-400"
              to="consultas"
            >
              Consultas
            </Link>

            <Link
              className="text-white text-lg font-normal hover:text-yellow-400"
              to="pacientes"
            >
              Pacientes
            </Link>

            <Link
              className="text-white text-lg font-normal pl-10 hover:text-yellow-400"
              to="login"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
