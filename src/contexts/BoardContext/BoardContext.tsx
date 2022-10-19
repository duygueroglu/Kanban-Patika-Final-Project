import {
    useState,
    createContext,
    FC,
    PropsWithChildren,
    useContext
  } from 'react'
  import instance from '../../services/http/patika/instance'
  import { ContextType, StateType } from './types'
 
  export const initialState: StateType = {
    boards: []
  }

  export const BoardContext = createContext<ContextType>({
    setState: ()=>{},
    state: initialState,
  })

  export const BoardProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, setState] = useState<StateType>(initialState)
  
    return (
      <BoardContext.Provider
        value={{
            state,
            setState
        }}
      >
        {children}
      </BoardContext.Provider>
    )
  }
  
  export const useBoardContext = () => {
    // const {state, setState} = useContext(BoardContext)
    return (
        useContext(BoardContext)
        )
    
  }