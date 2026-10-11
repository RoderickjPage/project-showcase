// App.jsx - root component.
// Owns ALL shared state: the project list and the search text.
// Children: Header, ProjectForm, SearchBar, ProjectList (which renders ProjectCard).
import { useState } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import initialProjects from "./data/projects";

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [search, setSearch] = useState("");

  // Called by ProjectForm with a new project object (inverse data flow).
  function handleAddProject(newProject) {
    setProjects([...projects, newProject]);
  }

  // Called by SearchBar on every keystroke.
  function handleSearchChange(text) {
    setSearch(text);
  }

  // Keep projects whose title or description contains the search text.
  const query = search.trim().toLowerCase();
  const visibleProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query)
  );

  return (
    <div className="page">
      <Header title="Personal Project Showcase App" />
      <main className="content">
        <ProjectForm onAddProject={handleAddProject} />
        <section className="panel" aria-label="Project list">
          <SearchBar search={search} onSearchChange={handleSearchChange} />
          <ProjectList projects={visibleProjects} hasSearch={query !== ""} />
        </section>
      </main>
    </div>
  );
}

export default App;
