export type ListRequestPayload = {
    title: string,
    num:number,
    boardId: number,
}


export type ListResponseType = {
    data : {
        title:string,
        num:number,
        boardId:number
    }
}