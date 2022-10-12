export type PasswordChangeFormProps = {
    onChangePassword: (values: PasswordChangeFormValueProps) => void
}

export type PasswordChangeFormValueProps = {

    username: string
    newPassword: string
    newPasswordConfirm: string
    oldPassword: string
}