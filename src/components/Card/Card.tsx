import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Styled } from './Card.styled'
import { CardProps } from './Card.types'

const Card: FC<CardProps> = (props) => {
  return (
    <Styled>

      <h1>{props.title}</h1>

      {props.children}

      
    </Styled>
  )
}

export default Card
