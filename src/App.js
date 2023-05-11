import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import TextField from "./components/TextField";
import Information from "./components/Information";
import ResultsHistory from "./components/ResultsHistory";
import Homepage from "./components/Homepage";
import { useSelector } from "react-redux";

function App() {
  const login = useSelector((state) => state.main.login);

  return (
    <Layout login={login}>
      <Routes>
        <Route exact path="/" element={<Homepage login={login} />} />
      </Routes>
      <Routes>
        <Route myValue path="/homepage" element={<Homepage login={login} />} />
      </Routes>
      <Routes>
        <Route path="/typing-test" element={<TextField login={login} />} />
      </Routes>
      <Routes>
        <Route
          path="/results-history"
          element={<ResultsHistory login={login} />}
        />
      </Routes>
      <Routes>
        <Route path="/information" element={<Information />} />
      </Routes>
    </Layout>
  );
}

export default App;
