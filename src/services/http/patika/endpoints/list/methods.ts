import service from '../../instance'
import { ListRequestPayload, ListResponseType } from './types'

export const createList = (
    payload: ListRequestPayload
    ): Promise <ListResponseType> => service.post('list', payload)

export const listListing = () => service.get('list')

export const updateList = (payload:ListRequestPayload) => 
    service.put(
        `list/${payload.boardId}?id=${payload.boardId}`, {title:payload.title, num:payload.num}
    )
