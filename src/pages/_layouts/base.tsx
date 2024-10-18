import { Outlet } from "react-router-dom";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export function BaseLayout() {
  return (
    <>
      <div className="flex flex-col w-full">
        <Header />
      </div>

      <div className="container mx-auto px-16 py-4 bg-gray-300">
        <Outlet />
      </div>

      <div className="flex flex-col w-full mx-auto">
        <Footer />
      </div>
    </>
  );
}
