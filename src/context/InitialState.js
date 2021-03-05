export const APP_STATE = {
    $init: false,
    $initStateFromLocalStorage: false,
    selectedTemplate: null,
    sidebarOpen: false,
    createdBy: "Ade Thor Miwa",
    summary: "",
    personal: {
        firstName: "",
        lastName: "",
        profession: "",
        city: "",
        stateOrProvince: "",
        zipCode: "",
        phone: "",
        email: ""
    },
    experience: [],
    education: [],
    skills: [],
    others: {},
    arrayOfFive: [1, 2, 3, 4, 5],
    shit: "dsfsadf"
}

const INITIAL_APP_STATE = JSON.parse(localStorage.getItem("Builder__AppState")) || APP_STATE;

export default INITIAL_APP_STATE;