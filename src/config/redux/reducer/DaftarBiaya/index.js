const initialStateRoot = {
    dataDiskonBiaya: [],
    dataTipeBiaya: [],
    dataGrupBiaya: [],
};

const ReducerDaftarBiaya = (state = initialStateRoot, action) => {
    switch (action.type) {
        case "SET_DATA_DISKON_BIAYA":
            return {
                ...state,
                dataDiskonBiaya: action.value
            } 
        case "SET_DATA_TIPE_BIAYA":
            return {
                ...state,
                dataTipeBiaya: action.value
            }
        case "SET_DATA_GRUP_BIAYA":
        return {
                ...state,
                dataGrupBiaya: action.value
            }
        default:
            return state
    }
}

export default ReducerDaftarBiaya;