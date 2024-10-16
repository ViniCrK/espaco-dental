export function Footer() {
  return (
    <>
      <footer className="py-8 px-24 text-white bg-slate-950">
        <div className="flex justify-between">
          <div className="flex gap-3 mb-4">
            <div className="bg-white rounded h-10 w-10">
              <figure>
                <img src="assets/espaco-dental-logo.jpg" alt="Logo" />
              </figure>
            </div>
            <div className="bg-white rounded h-10 w-10">
              <figure>
                <img src="" alt="" />
              </figure>
            </div>
            <div className="bg-white rounded h-10 w-10">
              <figure>
                <img src="" alt="" />
              </figure>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-yellow-300 h-1 w-12 mb-4"></div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Sobre
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-yellow-300 h-1 w-12 mb-4"></div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Termos
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-yellow-300 h-1 w-12 mb-4"></div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-300">
                  SAC
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
