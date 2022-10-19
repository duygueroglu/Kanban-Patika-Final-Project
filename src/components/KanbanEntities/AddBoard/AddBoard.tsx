import React from 'react'
import { useBoardContext } from '../../../contexts/BoardContext/BoardContext'
import { board } from '../../../services/http/patika/endpoints/board'
import AddButton from './AddButton'

const AddBoard = () => {
    const {state, setState} = useBoardContext()
    return (
        <AddButton boardDetail={board}/>
    )
}

export default AddBoard