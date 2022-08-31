const employeesReducer = (state = { data: [] }, action) => {
    switch (action.type) {
        case 'EMPLOYEES':
            return {
                data: [
                    ...state.data,
                    {
                        ...action.payload
                    }
                ]
            }
        default:
            return state;
    }
};

export default employeesReducer;
//[...state.filter(p => p.id !== action.payload.product_id), action.payload]