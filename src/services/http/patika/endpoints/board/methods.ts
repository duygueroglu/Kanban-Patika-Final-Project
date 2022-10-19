import service from '../../instance'
import {
  CreateBoardRequestPayload,
  CreateBoardResponseType,
} from './types'

export const createBoard = (
  payload: CreateBoardRequestPayload
): Promise<CreateBoardResponseType> => service.post('board', payload)

export const boardListing = () => service.get('board')

export const updateBoard = (id: number, payload: CreateBoardRequestPayload) =>
    service.put(
        `board/${id}?id=${id}`, {title:payload.title, members:payload.members}
    )