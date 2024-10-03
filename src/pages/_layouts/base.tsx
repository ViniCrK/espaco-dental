import { Outlet } from "react-router-dom";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export function BaseLayout() {
  return (
    <>
      <div className="flex flex-col w-full">
        <Header />
      </div>

      <div className="flex flex-grow w-full px-24 mx-auto pb-9 pt-6 bg-slate-300">
        <Outlet />
      </div>

      <div className="flex flex-col w-full mx-auto">
        <Footer />  
      </div>
    </>
  )
}