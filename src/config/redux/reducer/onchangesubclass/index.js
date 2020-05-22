const initialStateRoot = {
    data: []
};

const ReducerOnchangesubclass = (state = initialStateRoot, action) => {
    
    switch (action.type) {
        case "SET_SELECT_SUBCLASS":
            
            return {
                ...state,
                data: action.value
            }
            console.log("...state SET_SELECT_SUBCLASS");
            console.log(action.value);
       
        default:
            return state
    }

  
}


export default ReducerOnchangesubclass;