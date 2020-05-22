const initialStateRoot = {
    data: []
};

const ReducerSubclass = (state = initialStateRoot, action) => {
    
    switch (action.type) {
        case "SET_DATA_SUBCLASS":
           
            return {
                ...state,
                data: action.value
                
            }
            //console.log("...state");
            //console.log(...state);
        default:
            return state
    }

  
}


export default ReducerSubclass;