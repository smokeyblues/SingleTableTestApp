import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider as UrqlProvider, createClient, defaultExchanges } from "urql";
import { List } from "./pages/Idea";

const urql = createClient({
  url: import.meta.env.VITE_GRAPHQL_URL,
  exchanges: defaultExchanges
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UrqlProvider value={urql}>
      <App />
    </UrqlProvider>
  </React.StrictMode>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/ideas" />} />
        <Route path="ideas" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}
