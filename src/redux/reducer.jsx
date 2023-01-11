
const initialState = { prueba:"laaa prueba funciona"}

 function reducer ( state = initialState, action ){
    switch(action.type){
        case'action1':
        return{
            ...state,prueba:'el nuevo texot action success'}
        case'action2':
        return{
          ...state,prueba:'el tercer estado de la materia'}
            default:
            return state

    }


}

export default reducer