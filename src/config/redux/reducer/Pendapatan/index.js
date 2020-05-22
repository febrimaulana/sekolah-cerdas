const initialStateRoot = {
    dataTipePendapatan: [],
    dataDaftarPendapatan: []
};

const ReducerPendapatan = (state = initialStateRoot, action) => {
    switch (action.type) {
        case "SET_DATA_TIPE_PENDAPATAN":
            return {
                ...state,
                dataTipePendapatan: action.value
            } 
        case "SET_DATA_DAFTAR_PENDAPATAN":
            return {
                ...state,
                dataDaftarPendapatan: action.value
            }
        default:
            return state
    }
}

export default ReducerPendapatan;