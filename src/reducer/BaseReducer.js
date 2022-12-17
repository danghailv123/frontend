const initialState = {
    ma_so_sv: '',
    data_student: {},
    is_display_table_detail: null,
    data_list_student: {},
    data_list_history: {},
    is_progress: null,
    id_history: ''
}

const BaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_MA_SO_SV': {
            return {
                ...state,
                ma_so_sv: action.ma_so_sv
            }
        }

        case 'CHANGE_ID_HISTORY': {
            return {
                ...state,
                id_history: action.id_history
            }
        }
        case 'CHANGE_DATA_STUDENT': {
            return {
                ...state,
                data_student: action.data_student
            }
        }
        case 'CHANGE_DISPLAY_TABLE_DETAIL': {
            return {
                ...state,
                is_display_table_detail: action.is_display_table_detail
            }
        }
        case 'CHANGE_DATA_LIST_STUDENT': {
            return {
                ...state,
                data_list_student: action.data_list_student
            }
        }

        case 'CHANGE_DATA_LIST_HISTORY': {
            return {
                ...state,
                data_list_history: action.data_list_history
            }
        }
        case 'CHANGE_STATUS_PROGRESS': {
            return {
                ...state,
                is_progress: action.is_progress
            }
        }
        default: {
            return state
        }
    }
}

export default BaseReducer
