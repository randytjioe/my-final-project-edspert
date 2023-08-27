import { Routes, Route } from "react-router-dom";

import routers from "./routers/routers";

function App() {
  return (
    <Routes key={"route"}>
      {routers.map((val, key) => {
        return (
          <Route exact path={val.path} element={val.element} key={key}></Route>
        );
      })}
    </Routes>
  );
}

export default App;
