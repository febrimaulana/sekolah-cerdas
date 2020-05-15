const initialStateRoot = {
    loading: false,
    name: 'Febri Maulana Yunus'
};

const ReducerRoot = (state = initialStateRoot, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                loading: action.value
            }
        case "SET_NAME":
            return {
                ...state,
                name: action.value
            }
        default:
            return state
    }
}

export default ReducerRoot;