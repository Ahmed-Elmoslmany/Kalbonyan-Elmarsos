import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigations";


function RootPage(){
  return <>
  <MainNavigation />
  <main >

  <Outlet /> 
  </main>
  </>
}

export default RootPage