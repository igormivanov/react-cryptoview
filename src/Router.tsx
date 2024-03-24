import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import DefaultLayout from "./layouts";
import DetailsPage from "./pages/details";

export function Router(){
  return (
    <Routes>
      
      <Route path="/" element={<DefaultLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/:id" element={<DetailsPage/>}/>
      </Route>

      <Route path="*"  element={<Navigate to="/" />} />

    </Routes>
  )
}