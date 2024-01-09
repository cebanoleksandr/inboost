const UPDATE_NODES = 'UPDATE_NODES';

const initialState: InitialState = {
  items: [],
};

type InitialState = {
  items: number[],
};

export const nodeReducer = (
  state = initialState,
  action: ActionTypes,
): InitialState => {
  switch (action.type) {
    case UPDATE_NODES:
      return {
        ...state,
        items: action.payload
      }
  
    default:
      break;
  }
  return state;
}

//action creators
export const updateNodeAC = (nodes: number[]): UpdateNode => {
  return {
    type: UPDATE_NODES,
    payload: nodes
  }
}

type UpdateNode = {
  type: typeof UPDATE_NODES,
  payload: number[]
}

type ActionTypes = UpdateNode;
