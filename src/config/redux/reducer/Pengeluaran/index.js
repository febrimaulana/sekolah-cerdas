const initialStateRoot = {
    dataDaftarPengeluaran: [],
    dataTipePengeluaran: [],
};

const ReducerPengeluaran = (state = initialStateRoot, action) => {
    switch (action.type) {
        case "SET_DATA_DAFTAR_PENGELUARAN":
            return {
                ...state,
                dataDaftarPengeluaran: action.value
            } 
        case "SET_DATA_TIPE_PENGELUARAN":
            return {
                ...state,
                dataTipePengeluaran: action.value
            }
        default:
            return state
    }
}

export default ReducerPengeluaran;