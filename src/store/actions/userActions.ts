import { Dispatch } from 'redux';
import axios from 'axios';
import { UserActionTypes, GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE } from '../types/userTypes';


export const getUsers = (page: number, resultsPerPage: number): any => async (dispatch: Dispatch<UserActionTypes>) => {
    try {
      dispatch({
        type: GET_USERS_REQUEST,
      });
  
      const response = await axios.get(`https://randomuser.me/api/?page=${page}&results=${resultsPerPage}`);
  
      const users = response.data.results.map((user: any) => ({
        uuid: user.login.uuid,
        title: user.name.title,
        firstName: user.name.first,
        lastName: user.name.last,
        username: user.login.username,
        thumbnail: user.picture.thumbnail,
      }));
  
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: users,
      });
    } catch (error: any ) {
      dispatch({
        type: GET_USERS_FAILURE,
        payload: error.message ,
      });
    }
  };
  