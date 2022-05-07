import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { IUser, IUserInitialState } from "./user.type";

const initialState: IUserInitialState = {
    isConnected: false,
    currentUser: {},
    users: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
            setUser: (state, action: PayloadAction<IUser>) =>{
                return {
                    ...state,
                    isConnected: true,
                    user: action.payload,
                }
            },
            removeUser: (state) =>{
                return {
                    ...state,
                    isConnected: false,
                    user: {}
                }
            },
            singup: (state, action: PayloadAction<IUser>) =>{
                
                return {
                    ...state,
                    users: [...state.users, action.payload ]
                }
            }
    }
})

export default userSlice.reducer

export const { setUser, removeUser } = userSlice.actions;