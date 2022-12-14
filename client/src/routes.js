import { Routes,Route } from "react-router-dom";
import { Home } from './pages/Home';
import { About } from './pages/About'; 
import {Forteams } from './pages/ForTeams';
import Products from "./pages/products";
import Auth from "./pages/auth";
import User from "./pages/user";
import Error from "./pages/Error";
import { Questions } from "./pages/questions";
import { Ask } from "./pages/Askquestions";
import { Answer } from "./components/Answer";


export default function Path(){
return(<Routes>
    <Route path='/' element={<Home />} />
    <Route path='about' element={<About />}  />
    <Route path='products' element={<Products/>}  />
    <Route path='Forteams' element={<Forteams/>}  />
    <Route path='Auth' element={<Auth/>}  />
    <Route path='Forteams' element={<Forteams/>}  />
    <Route path='/User' element={<User/>}  />
    <Route path='/Questions' element={<Questions/>}  />
    <Route path='/AskQuestions' element={<Ask/>}  />
    <Route path='/Questions/AskQuestions' element={<Ask/>}  />
    <Route path='/Answer' element={<Answer/>}  />
    <Route path='/Questions/:id' element={<Answer />}  />
    <Route path='/*' element={<Error />}  />


    </Routes>)
}