const initialStateRoot = {
    data: []
};

const ReducerJadwalKelas = (state = initialStateRoot, action) => {
    
    switch (action.type) {
        case "SET_DATA_JADWALCLASS":
            
            return {
                ...state,
                data: action.value
            }
            console.log("...state SET_DATA_JADWALCLASS");
            console.log(action.value);
       
        default:
            return state
    }

  
}


export default ReducerJadwalKelas;