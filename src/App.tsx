import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { BlogPage, GamesPage, HomePage, ProjectsPage } from "./index.ts";
import { NavBar } from "./index.ts";

function App() {
  const customTheme = {
    // Custom Progress Bars
    progress: {
      defaultProps: {
        barProps: {
          className: "bg-gradient-to-r from-green-300 to-blue-200",
        },
      },
    },
  };

  return (
    <ThemeProvider value={customTheme}>
      <BrowserRouter>
        <NavBar />
        <div className="flex flex-col justify-between">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/games" element={<GamesPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
