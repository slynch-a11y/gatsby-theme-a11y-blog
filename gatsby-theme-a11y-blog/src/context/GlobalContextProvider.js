// import React from "react";
// export const GlobalStateContext = React.createContext();
// export const GlobalDispatchContext = React.createContext();

// const initialState = {
//   searchTerm: "",
//   searchResults: [],
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "SHOW_SEARCH_RESULTS": {
//       return {
//         ...state,
//         searchResults: action.payload,
//       };
//     }
//     case "SHOW_SEARCH_TERM": {
//       return {
//         ...state,
//         searchTerm: action.payload,
//       };
//     }
//     default:
//       throw new Error("Bad Action Type");
//   }
// }

// const GlobalContextProvider = ({ children }) => {
//   const [state, dispatch] = React.useReducer(reducer, initialState);
//   return (
//     <GlobalStateContext.Provider value={state}>
//       <GlobalDispatchContext.Provider value={dispatch}>
//         {children}
//       </GlobalDispatchContext.Provider>
//     </GlobalStateContext.Provider>
//   );
// };

// export default GlobalContextProvider;
