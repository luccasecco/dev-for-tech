export interface IUser {
  id: number;
  name: string;
  email: string;
  avatar?: {
    path: string;
  }
}

export interface IGlobalState {
  users: IUser[]
}