const initialStateRoot = {
    dataDaftarBukuTambahBuku: [],
};

const ReducerPerpustakaan = (state = initialStateRoot, action) => {
    switch (action.type) {
        case "SET_DATA_DAFTARTAMBAH_BUKU":
            return {
                ...state,
                dataDaftarBukuTambahBuku: action.value
            } 
        // case "SET_DATA_DAFTAR_PENDAPATAN":
        //     return {
        //         ...state,
        //         dataDaftarPendapatan: action.value
        //     }
        default:
            return state
    }
}

export default ReducerPerpustakaan;