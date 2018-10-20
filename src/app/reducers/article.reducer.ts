import * as allAction from '../actions/article.action';
import { Appstate } from '../appstate';

export const initialState : Appstate={article:[],message:''};
export function reducer(state=initialState,action:allAction.ALL_REDUCER_ACTIONS):Appstate{
    switch(action.type){
        case allAction.SHOW_ALL_SUCCESS:{
            return {
                article:action.payload,message:'Success'
            };
        }
        case allAction.CREATE_SUCCESS:{
            return{
                article:[action.payload],message:'Article Created'
            };
        }
        case allAction.CREATE_FAILURE:{
            return {
                article:[],message:action.payload
            };
        }
        case allAction.GET_BY_ID_SUCCESS:{
            return{
                article:[action.payload],message:"Success"
            };
        }
        case allAction.RESET:{
            return{
                article:[],message:''
            }
        };
        default:{
            return state;
        }
    }
}