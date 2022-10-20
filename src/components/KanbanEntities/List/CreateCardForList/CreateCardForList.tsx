import React from "react";
import { useBoardContext } from "../../../../contexts/BoardContext/BoardContext";
import Card from "../../../Card";
import { useState, useEffect } from "react";
import ListDetail from "../ListDetail";

const CreateCardForList = () => {
  const {state, setState } = useBoardContext();
  return (
    <div>
        <div className="">
            <ListDetail listDetails={state}>
                Untitled list
            </ListDetail>
        </div>
    </div>
  );
};

export default CreateCardForList;
