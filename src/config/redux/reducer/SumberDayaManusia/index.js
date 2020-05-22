const initialStateRoot = {
    dataTipeCuti: [],
    dataDivisi: [],
    dataPenugasan: [],
};

const ReducerSumberDayaManusia = (state = initialStateRoot, action) => {
    switch (action.type) {
        case "SET_DATA_TIPE_CUTI":
            return {
                ...state,
                dataTipeCuti: action.value
            } 
        case "SET_DATA_DIVISI":
            return {
                ...state,
                dataDivisi: action.value
            }
        case "SET_DATA_PENUGASAN":
            return {
                ...state,
                dataPenugasan: action.value
            }
        default:
            return state
    }
}

export default ReducerSumberDayaManusia;