const initialStateRoot = {
    data: []
};

const ReducerGuruMataPelajaran = (state = initialStateRoot, action) => {
    
    switch (action.type) {
        case "SET_DATA_GURUMATAPELAJARAN":
            
            return {
                ...state,
                data: action.value
            }
            console.log("...state SET_DATA_GURUMATAPELAJARAN");
            console.log(action.value);
       
        default:
            return state
    }

  
}


export default ReducerGuruMataPelajaran;