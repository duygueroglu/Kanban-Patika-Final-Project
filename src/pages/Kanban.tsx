import React, { FC, useState  } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { auth } from '../services/http/patika/endpoints/auth'
import Board from '../components/KanbanEntities//Board'
import { useBoardContext } from '../contexts/BoardContext/BoardContext'
import AddBoard from '../components/KanbanEntities/AddBoard'
import AddButton from '../components/KanbanEntities/AddBoard/AddButton'

export type KanbanProps = {
  onLogout: () => void
  onAddBoard: () => void
}
const Kanban: FC<KanbanProps> = (props) => {
  const {state, setState} = useBoardContext()
  const [boardFormValues, setBoardFormValues] = useState<BoardFormValuesProps>({
    title: "Initial Board",
    members: []
  })
  const handleLogout = () => {
    props.onLogout?.()
  }
  const handleAddBoard = () => {
    props.onAddBoard?.()
  }
  return (
    <div>
      <Link to='/board/:id'>
        <Button style = {{
          width:'8%', height:'100px', margin:'50px', backgroundColor:'#4f5a7a'
      }} 
        onClick={handleAddBoard} type="submit">Add New Board</Button>
        </Link>
      <Link to='/password-change'><Button  style = {{
          width:'8%', height:'100px', margin:'50px', backgroundColor:'#4f5a7a'
      }}>Password Change</Button></Link>
      <Button  style = {{
          width:'8%', height:'100px', margin:'50px', backgroundColor:'#4f5a7a'
      }} onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default Kanban
