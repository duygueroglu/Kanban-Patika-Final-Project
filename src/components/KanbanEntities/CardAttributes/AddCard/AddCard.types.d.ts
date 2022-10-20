import { PropsWithChildren } from "react"

export type AddCarProps = PropsWithChildren<{
    title:string
    num: number
    details: string
    dueDate: Date
}>