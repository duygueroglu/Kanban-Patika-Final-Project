import React, { Dispatch, SetStateAction } from "react";

export type StateType = {
    boards: Array<{
      title:string,
      members:[]
    }>
  }
  
  export type ContextType = {
    state: StateType,
    setState: Dispatch <React.SetStateAction<StateType | any>>,
  }