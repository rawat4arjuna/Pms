import  React from "react";

let ContextOne = React.createContext<any>({})

let initialState = {
  theme: null
};

let reducer = (state : any, action:any) => {
  switch (action.type) {
    case "change":
      return {
        ...state,
        theme: action.theme,
      };
    default:
      return { ...state };
  }
};

function ContextOneProvider(props:any) {
  let [state, dispatch] = React.useReducer<any>(reducer, initialState);
  let value = { state, dispatch };
  return (
    <ContextOne.Provider value={value}>{props.children}</ContextOne.Provider>
  );
}

let ContextOneConsumer = ContextOne.Consumer;
export { ContextOne, ContextOneProvider, ContextOneConsumer };
