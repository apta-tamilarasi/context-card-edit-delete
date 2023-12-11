import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useReducer } from "react";
import { globalState } from './Component/Context/Context.js'
import { initialState,Reducer } from "./Component/Context/Reducer.js";
import Card from './Component/CliqCard/Card.js'
import {Form} from './Component/Form/Form.js'


const Routing = () => {

    let [state,dispatch]=useReducer(Reducer,initialState)
    return (
        <globalState.Provider value={{state,dispatch}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Form />}></Route>
                    <Route path='/card' element={<Card />}></Route>
                    {/* <Route path='/form/:id' element={<Form />}></Route> */}
                    
                </Routes>
            </BrowserRouter>
        </globalState.Provider>
    )
}

export default Routing