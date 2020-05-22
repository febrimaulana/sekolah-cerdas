const initialStateRoot = {
    dataDaftarUjian: [],
    dataPencapaianNilai: [],
};

const ReducerUjian = (state = initialStateRoot, action) => {
    switch (action.type) {
        case "SET_DATA_DAFTAR_UJIAN":
            return {
                ...state,
                dataDaftarUjian: action.value
            } 
        case "SET_DATA_PENCAPAIAN_NILAI":
        return {
            ...state,
            dataPencapaianNilai: action.value
            }
        default:
            return state
    }
}

export default ReducerUjian;