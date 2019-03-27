
export default function (state={},action){
    switch(action.type){
        case 'GET_COMPSLEASE':
            return {...state,compsLease:action.payload}
        default:
            return state;
    }
}