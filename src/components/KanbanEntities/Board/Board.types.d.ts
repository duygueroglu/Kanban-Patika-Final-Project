export type BoardFormProps =  {
    onAddBoard: (values: BoardFormValuesProps) => void
}

export type BoardFormValuesProps = {
  id: number;
  title: string;
  owner: User;
  ownerId: number;
  members: Array;
  lists: List[];
}