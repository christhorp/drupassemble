const projectsReducterDefaultState = [];


export default (state = projectsReducterDefaultState, action) => {

    switch (action.type) {
        case 'ADD_PROJECT':
            return [...state, action.project];
        case 'REMOVE_PROJECT':
            return state.filter(({id}) => id !== action.id);
        case 'SET_PROJECTS':
            return action.projects;
        default:
            return state;

    }

}