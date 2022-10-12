
import React, { useState, FC } from 'react'
import Button from '../Button'
import Card from '../Card'
import Input from '../Input'
import { InputProps } from '../Input/Input.types'
import { Styled } from './PasswordChangeForm.styled'
import axios from 'axios'
import { PasswordChangeFormProps, PasswordChangeFormValueProps } from './PasswordChangeForm.types'
import { Link } from 'react-router-dom'

const PasswordChangeForm: FC<PasswordChangeFormProps> = (props) => {
    const [formValues, setFormValues] = useState<PasswordChangeFormValueProps>({
        username: '',
        oldPassword: '',
        newPassword: '',
        newPasswordConfirm: ''
    })

    const handleChange: InputProps['onChange'] = (e, v) => {
        const name = e.target.name
        setFormValues((prev: any) => ({ ...prev, [name]: v }))
    }

    const handleSubmit = () => {
        props.onChangePassword?.(formValues)

        // axios.post('http://localhost:80/auth/passwordChange', formValues)
    }


    return (
        <Styled>

            <Link to='/'>
                <span className="material-symbols-outlined" style={{ color: "#4072FD", position: "absolute", margin: "10px" }}>arrow_back</span>
            </Link>
            <Card title="Change Password">

                <Input
                    onChange={handleChange}
                    value={formValues.username}
                    icon="person"
                    name="username"
                    type="text"
                    placeholder="Enter your username"
                    style={{ marginBottom: '15px' }}
                />
                <Input
                    onChange={handleChange}
                    value={formValues.oldPassword}
                    icon="key"
                    name="oldPassword"
                    type="password"
                    placeholder="Enter your old password"
                    style={{ marginBottom: '15px' }}
                />
                <Input
                    onChange={handleChange}
                    value={formValues.newPassword}
                    name="newPassword"
                    icon="key"
                    type="password"
                    placeholder="Create a password"
                    style={{ marginBottom: '15px' }}
                />

                <Input
                    name="newPasswordConfirm"
                    onChange={handleChange}
                    value={formValues.newPasswordConfirm}
                    icon="key"
                    type="password"
                    placeholder="Confirm the password"
                    style={{ marginBottom: '15px' }}
                />
                <Button
                    onClick={handleSubmit}
                >Change Password</Button>
                {
                    (formValues.newPassword === formValues.oldPassword && formValues.newPassword !== "") ?

                        <p className="register-links">
                            Eski parolayla aynı olamaz.{' '}
                        </p> :
                        ""
                }
                {
                    (formValues.newPassword !== formValues.newPasswordConfirm && formValues.newPasswordConfirm !== "") ?

                        <p className="register-links">
                            Parolalar eşleşmemektedir.{' '}
                        </p> :
                        ""
                }

            </Card>
        </Styled>
    )
}

export default PasswordChangeForm