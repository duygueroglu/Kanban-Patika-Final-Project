import { ListValuesProps } from "./AddList.types";
import { useState } from "react";

const AddList = (props:any) => {
    const [listValues, setListValues] = useState<ListValuesProps> ({ 
        title: "Initial List",
        boardId: 0,
        num: 0,  
})

    const handleAddList = (e:any) => {
        e.preventDefault()
    };
    return (
        <div>
            <p>Add New List</p>
            <button onClick={handleAddList}>Add List</button>
        </div>
  );
};

export default AddList;
