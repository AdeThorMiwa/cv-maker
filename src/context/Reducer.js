import { UPDATE_PERSONAL, SET_TEMPLATE, OPEN_SIDEBAR, CLOSE_SIDEBAR, INPUT_UPDATE, ADD_EXPERIENCE, EDIT_EXPERIENCE, DELETE_EXPERIENCE, ADD_EDUCATION, EDIT_EDUCATION, DELETE_EDUCATION, UPDATE_SKILLS } from "./Types";
import { parseMarkUpListToArray } from "./../utils/form";
import { APP_STATE } from "./InitialState";

const Reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        /**
         * General Reducers Actions
         */
        case INPUT_UPDATE:
            return {
                ...state,
                [payload.target]: payload.nest ? {
                    ...state[payload.target],
                    [payload.nest]: payload.value
                } : payload.value
            };

        case SET_TEMPLATE:
            return {
                ...state,
                selectedTemplate: payload
            };

        case OPEN_SIDEBAR:
            return {
                ...state,
                sidebarOpen: true
            };

        case CLOSE_SIDEBAR:
            return {
                ...state,
                sidebarOpen: false
            };

        case "DONE":
            return {
                ...APP_STATE
            };

        /**
         * Personal Reducers Actions
         */
        case UPDATE_PERSONAL:
            return {
                ...state,
                personal: {
                    ...state.personal,
                    ...payload
                }
            }

        /**
         * Experience Reducers Actions
         */
        case ADD_EXPERIENCE:
            return {
                ...state,
                experience: [
                    ...state.experience,
                    {
                        ...payload,
                        description: parseMarkUpListToArray(payload.description)
                    }
                ]
            };
        case EDIT_EXPERIENCE:
            return {
                ...state,
                experience: state.experience.map(
                    (exp, i) => i.toString() === payload.index ? {
                        ...payload.values, description: parseMarkUpListToArray(payload.values.description)
                    } : exp
                )
            }
        case DELETE_EXPERIENCE:
            return {
                ...state,
                experience: state.experience.filter((a, i) => i !== payload)
            }

        /**
         * Education Reducers Actions
         */
        case ADD_EDUCATION:
            return {
                ...state,
                education: [
                    ...state.education,
                    payload
                ]
            };
        case EDIT_EDUCATION:
            return {
                ...state,
                education: state.education.map(
                    (edu, i) => i.toString() === payload.index ? payload.values : edu
                )
            }
        case DELETE_EDUCATION:
            return {
                ...state,
                education: state.education.filter((a, i) => i !== payload)
            };

        /**
         * Skills
         */
        case UPDATE_SKILLS:
            return {
                ...state,
                skills: payload
            }

        default:
            return state;
    }
}

export default Reducer;