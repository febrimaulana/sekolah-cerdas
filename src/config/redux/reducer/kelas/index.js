const initialStateRoot = {
    data: []
};

const ReducerKelas = (state = initialStateRoot, action) => {
    switch (action.type) {
        case "SET_DATA_KELAS":
            return {
                ...state,
                data: action.value
            }
        default:
            return state
    }
}

export default ReducerKelas;