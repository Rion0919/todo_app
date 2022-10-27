export type Todos = {
  id: string;
  content: string;
  check: boolean;
}

export interface ListsType extends Todos {
  todos: Todos,
  deleteHandler: (id: string) => void,
  checkHandler: (id: string) => void,
}