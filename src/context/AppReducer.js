export default  (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transaction:state.transaction.filter( transaction => transaction.id !== 
                action.payload)
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transaction: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}