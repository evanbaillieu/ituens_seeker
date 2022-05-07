export interface IUser {
    id?: string,
    username?: string,
    email?: string,
    nbAvis?: number,
    roles?: string[],
    accessToken?: string,
}

export type IUserInitialState = {
    isConnected?: boolean,
    currentUser?: IUser,
    users: IUser[]
}

