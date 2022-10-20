import { listListing } from './../../../../services/http/patika/endpoints/list/methods';
import { useEffect, useState } from "react";
import { ListDetailProps } from './ListDetail.types';
import { ListValuesProps } from '../AddList/AddList.types';

const ListDetail = (props:any) => {
    const [listDetails, setListDetails] = useState<ListValuesProps>(
)
    const [listing, setListing] = useState()
    return(
        <div>
            <a>{props.title}</a>
            <button onClick={() => setListDetails}></button>
        </div>
    )
}