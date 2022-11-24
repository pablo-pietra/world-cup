import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./components/home";
import Game from "./components/game";

export default function App() {
  return (
    <div>
      <h1>World cup results</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="game" element={<Game />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Games</Link>
          </li>
          <li>
            <Link to="/game">Add game</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
