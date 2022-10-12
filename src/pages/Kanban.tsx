import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

export type KanbanProps = {
  onLogout: () => void
  onAddBoard: () => void
}
const Kanban: FC<KanbanProps> = (props) => {
  const handleLogout = () => {
    props.onLogout?.()
  }
  const handleAddBoard = () => {
    props.onAddBoard?.()
  }
  return (
    <div>
      <h1>Welcome ${username} to the kanban app</h1>
      <Button onClick={handleAddBoard}>Add New Board</Button>
      <Link to='/password-change'><Button>Password Change</Button></Link>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default Kanban
