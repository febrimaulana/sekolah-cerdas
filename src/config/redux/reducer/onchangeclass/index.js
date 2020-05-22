const initialStateRoot = {
    data: []
};

const ReducerOnchangeclass = (state = initialStateRoot, action) => {
    
    switch (action.type) {
        case "SET_SELECT_CLASS":
            
                return {
                    ...state,
                    data: action.value
                }
        
        default:
            return state
    }

  
}


export default ReducerOnchangeclass;