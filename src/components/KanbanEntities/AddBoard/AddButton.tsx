
import { useNavigate } from "react-router-dom";

const AddButton=({boardDetail} : any) => {
  
  const navigate = useNavigate()

  return (
    <button onClick={() => navigate(`/board/${boardDetail.id}`)} type="submit">
        {boardDetail.title}
    </button>
  );
};

export default AddButton;
