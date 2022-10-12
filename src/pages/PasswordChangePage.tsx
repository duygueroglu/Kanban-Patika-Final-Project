import axios from 'axios'
import React, { FC } from 'react'
import { useNavigate } from 'react-router'
import { PasswordChangeFormProps } from '../components/PasswordChangeForm/PasswordChangeForm.types'
import PasswordChangeForm from '../components/PasswordChangeForm'

export type PasswordChangePageProps = {
  onPasswordChange: (token: string) => void
  istoken: string
}

const PasswordChangePage: FC<PasswordChangePageProps> = (props) => {
  const navigate = useNavigate()
  const handlePasswordChange: PasswordChangeFormProps['onChangePassword'] = (values) => {
    axios.post('http://localhost:80/auth/password-change', values, 
    {
      headers: {
        "Authorization": `Bearer ${props.istoken}`
      }
    }
    )
    .then(({ data }) => {
      props.onPasswordChange?.(data.token)
      navigate("/login")
    })
  }
  return <PasswordChangeForm onChangePassword={handlePasswordChange} />
}

export default PasswordChangePage
