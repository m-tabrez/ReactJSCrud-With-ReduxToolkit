import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    users : [
        {name : "Mohammed Tabrez", city : "Bengaluru", email : "tab@gmail.com", id: 101},
        {name : "Tasmiya Bareen", city : "Chennai", email : "tas@gmail.com", id: 102},
        {name : "Musad", city : "Bengaluru", email : "mus@gmail.com", id: 103}
    ],
    selectedUser : null
}

export const crudSlice = createSlice({
    name : 'crud',
    initialState,
    reducers : {
        addUser : (state, action) => {
            state.users.push(action.payload)
        },
        updateUser : (state, action) => {
            state.users = state.users.map( curEle => {
                if(curEle.id == action.payload.id){
                    return action.payload
                }else{
                    return curEle
                }
            })
            state.selectedUser = null
        },
        selectedUserToUpdate : (state, action) => {
            state.selectedUser = state.users.find(curEle => curEle.id === action.payload);
        },
        deleteUser : (state, action) => {
            state.users = state.users.filter( curUser => curUser.id !== action.payload) 
        }
    }
})

export const { addUser, updateUser, selectedUserToUpdate, deleteUser} = crudSlice.actions

export default crudSlice.reducer