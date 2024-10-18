export function HomePage() {
  return (
    <>
      <div className="min-h-screen text-white flex flex-col items-center justify-center">
        <div className="text-center bg-zinc-900 p-4 rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <img
              src="src\assets\espaco-dental-logo.jpg"
              alt="Espaço Dental Logo"
              className="w-32 h-32 mb-4"
            />
          </div>
          <h1 className="text-4xl font-bold mb-2">Espaço Dental</h1>
          <p className="text-lg font-semibold italic text-yellow-400">
            Seu sorriso, nossa prioridade
          </p>
          <p className="text-gray-300 mt-4 max-w-md">
            Bem-vindo ao sistema de gestão do Espaço Dental, onde facilitamos o
            gerenciamento do seu consultório com eficiência e praticidade.
          </p>
        </div>
      </div>
    </>
  );
}
