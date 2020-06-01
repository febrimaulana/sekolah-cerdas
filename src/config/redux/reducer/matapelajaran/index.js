const initialStateRoot = {
    data: []
};

const ReducerMatapelajaran = (state = initialStateRoot, action) => {
    switch (action.type) {
        case "SET_DATA_SISWA":
            return {
                ...state,
                data: action.value
            }
        default:
            return state
    }
}

export default ReducerMatapelajaran;