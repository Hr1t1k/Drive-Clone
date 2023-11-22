import { createContext, useContext } from "react";
export const PathContext = createContext({
  path: "",
  setPath: () => {},
});
export const PathProvider = PathContext.Provider;
export default function usePath() {
  return useContext(PathContext);
}
