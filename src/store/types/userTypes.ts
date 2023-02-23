// Định nghĩa các kiểu dữ liệu cho store
export interface User {
    uuid: string,
    title: string;
    firstName: string;
    lastName: string;
    username: string;
    thumbnail: string;
}
  
export interface UserState {
    users: User[];
    loading: boolean;
    error: string | null;
}
  
export interface User {
    login: {
      uuid: string;
      username: string;
    };
    name: {
      title: string;
      first: string;
      last: string;
    };
    picture: {
      thumbnail: string;
    };
}

  
  // Các hành động của store
export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';
  
export interface FetchUsersRequestAction {
    type: typeof GET_USERS_REQUEST;
}
  
export interface FetchUsersSuccessAction {
    type: typeof GET_USERS_SUCCESS;
    payload: User[];
}
  
  export interface FetchUsersFailureAction {
    type: typeof GET_USERS_FAILURE;
    payload: string;
  }
  
export type UserActionTypes =
    | FetchUsersRequestAction
    | FetchUsersSuccessAction
    | FetchUsersFailureAction;
  