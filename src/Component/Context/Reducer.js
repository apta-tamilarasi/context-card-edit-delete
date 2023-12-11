
export const initialState={
    arr:[]

}

export const Reducer=(state,action)=>{

    if(action.type==='updatearr'){
        console.log(action)
        return {...state, arr:action.payload}
    }

}