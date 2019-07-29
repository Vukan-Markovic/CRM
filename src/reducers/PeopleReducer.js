const initialState = {
    people: [],
    detailView: false,
    personSelected: null,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    company: '',
    project: '',
    notes: '',
    _id: '',
    toUpdate: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'INITIAL_FETCH':
            return {
                ...state,
                people: action.payload,
            }

        case 'SELECTED_PERSON':
            return {
                ...state,
                detailView: true,
                personSelected: action.selectId
            }

        case 'NONE_SELECTED':
            return {
                ...state,
                detailView: false,
                personSelected: null
            }

        case 'FORM_UPDATE':
            return {
                ...state,
                [action.payload.prop]: action.payload.value
            }
        case 'NEW_CONTACT':
            return {
                ...state,
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                company: '',
                project: '',
                notes: '',
            }

        case 'ADD_PERSON':
            return {
                ...state,
                ...action.newPerson
            }

        case "DELETE_CONTACT":
            return {
                ...state,
                detailView: false,
                personSelected: null,
            }

        case 'UPDATE_CONTACT':
            return {
                ...state,
                toUpdate: true,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                phone: action.payload.phone,
                email: action.payload.email,
                company: action.payload.company,
                project: action.payload.project,
                notes: action.payload.notes,
                _id: action.payload._id,
            }

        case 'SAVE_CONTACT':
            return {
                ...state,
                toUpdate: false,
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                company: '',
                project: '',
                notes: '',
                _id: '',
            }

        default:
            return state;
    }
}