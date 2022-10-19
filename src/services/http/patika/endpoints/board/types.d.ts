export type CreateBoardRequestPayload = {
    members: string[]
    title: string
    id:number
}

export type CreateBoardResponseType = {
    data : {
        id: number
        title: string,
        members: string[]
    }
}