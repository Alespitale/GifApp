import { LiveTitle } from "./components/LiveTitle";
import { InputBarAndGrid } from "./components/InputBarAndGrid";
import { useDarkMode } from "./hooks/useDarkMode";
import { useGoUp } from "./hooks/useGoUp";

export const App = () => {
  return (
    <>
      <span className="lnr lnr-moon" onClick={useDarkMode}></span>
      <span className="lnr lnr-sun" onClick={useDarkMode}></span>
      <LiveTitle />
      <InputBarAndGrid />
      <span className="lnr lnr-arrow-up-circle" onClick={useGoUp}></span>
    </>
  );
};
