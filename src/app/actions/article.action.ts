import{Action } from '@ngrx/store';
import { Article } from '../models/article';

export const SHOW_ALL ='Show all ';
export const SHOW_ALL_SUCCESS='Shcow All Success';
export const CREATE='Create';
export const CREATE_SUCCESS='CREATE Success';
export const CREATE_FAILURE='Create Success Failure';
export const GET_BY_ID ='Get By Id';
export const GET_BY_ID_SUCCESS='Get By Id  Succes';
export const RESET ='Reset';

export class ShowAllAction implements Action{
    readonly type =SHOW_ALL;
}

export class ShowAllSuccessAction implements Action{
    readonly type =SHOW_ALL_SUCCESS;
    constructor(public payload:Article[]){}
}

export class CreateAction implements Action{
    readonly type=CREATE;
    constructor(public payload :Article){}
}

export class CreateSuccessAction implements Action{
readonly type=CREATE_SUCCESS;
constructor(public payload:Article){}
}

export class CreateFailureAction implements Action{
    readonly type=CREATE_FAILURE;
    constructor(public payload:any){}
    }

export class GetByIdAction implements Action{
    readonly type =GET_BY_ID;
    constructor(public payload:String){}
}

export class GetByIdSuccessAction implements Action{
    readonly type =GET_BY_ID_SUCCESS;
    constructor(public payload:Article){}
}

export class ResertAction implements Action{
    readonly type =RESET;
}

export type ALL_REDUCER_ACTIONS=
ShowAllSuccessAction|
CreateSuccessAction|
CreateFailureAction|
GetByIdSuccessAction|
ResertAction