const initialStateRoot = {
    loading: false,
    modal: false,
    form: [],
    formType: ''
};

const ReducerRoot = (state = initialStateRoot, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                loading: action.value
            }
        case "SET_MODAL":
            return {
                ...state,
                modal: action.value
            }
        case "SET_FORM":
            return {
                ...state,
                form: action.value
            }
        case "SET_FORM_TYPE":
            return {
                ...state,
                formType: action.value
            }
        default:
            return state
    }
}

export default ReducerRoot;