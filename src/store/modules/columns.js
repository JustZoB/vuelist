export default {
    state: { 
        columns: [
            {
                id: 1,
                name: "Statuses", 
                tasks: [
                    { name: "Cook" },
                    { name: "Sleep" },
                    { name: "Run" }
                ]
            },
            { 
                id: 2,
                name: "Pending",
                tasks: [
                    { name: "Work" }
                ]
            },
            { 
                id: 3,
                name: "Cancel",
                tasks: [
                    { name: "Read" },
                    { name: "Sport" }
                ]
            },
            { 
                id: 4,
                name: "Done",
                tasks: [
                    { name: "Wash dishes" },
                    { name: "Shoping" },
                    { name: "Walk" }
                ]
            }
        ],
    },

    getters: {
        COLUMNS: (state) => {
            return state.columns
        }
    },

    mutations: {
        SET_COLUMNS: (state, payload) => {
            state.columns = payload;
        },

        ADD_COLUMN: (state, payload) => {
            state.columns.push(payload);
        },

        /*ADD_TASK: (state, payload) => {
            state.columns.push(payload);
        }*/
    },

    actions: {    }
    
}