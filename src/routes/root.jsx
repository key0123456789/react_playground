import { Outlet } from 'react-router-dom'
import { ThemeProvider } from "styled-components";
import { theme } from "../utils/theme";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h2>React Router</h2>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`test`}>テストページへ</a>
            </li>
            <li>
              <a href={`style`}>スタイル指定</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <ThemeProvider theme={theme}>
          <Outlet />
        </ThemeProvider>
      </div>
    </>
  );
}
