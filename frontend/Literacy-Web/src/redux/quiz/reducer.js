import * as types from "./types";

const initialState = {
    status: {
        valid: false,
        loading: false,
        get: false,
        quizStatus: [],
        quizSummary: [],
    },
};

export default function quiz(state = initialState, action) {
    switch (action.type) {
        case types.GET_QUIZ_REQUEST:
            return {
                ...state,
                status: {
                    ...state.status,
                    loading: true,
                },
            };
        case types.GET_QUIZ_REQUEST_SUCCESS:
            return {
                ...state,
                status: {
                    ...state.status,
                    loading: false,
                    get: true,
                    valid: true,
                    quizzestatus: action.quizzes,
                },
            };
        case types.GET_QUIZ_REQUEST_FAILURE:
            return {
                ...state,
                status: {
                    ...state.status,
                    get: false,
                    valid: false,
                    loading: false,
                },
            };
        // post quiz result
        case types.POST_QUIZ_RESULT:
            return {
                ...state,
                status: {
                    ...state.status,
                    loading: true,
                },
            };
        case types.POST_QUIZ_RESULT_SUCCESS:
            return {
                ...state,
                status: {
                    ...state.status,
                    loading: false,
                    valid: true,
                },
            };
        case types.POST_QUIZ_RESULT_FAILURE:
            return {
                ...state,
                status: {
                    ...state.status,
                    valid: false,
                    loading: false,
                },
            };
        // Quiz Summary state
        case types.QUIZ_SUMMARY_UPDATE:
            return {
                ...state,
                status: {
                    ...state.status,
                    quizSummary: action.summary
                },
            };
        default:
            return state;
    }
}