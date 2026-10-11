// ProjectForm.jsx - controlled form for adding a project.
// Keeps its own input state; calls onAddProject(newProject) on submit.
import { useState } from "react";

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); // stop the page from reloading

    // Simple validation: both fields are required
    if (title.trim() === "" || description.trim() === "") {
      setError("Enter a title and a description to add a project.");
      return;
    }

    onAddProject({
      id: Date.now(), // unique enough for a client-side list
      title: title.trim(),
      description: description.trim(),
    });

    // Clear the form
    setTitle("");
    setDescription("");
    setError("");
  }

  return (
    <form className="panel form" onSubmit={handleSubmit} aria-label="Add project">
      <h2>Add Project</h2>

      <label htmlFor="project-title">Title</label>
      <input
        id="project-title"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <label htmlFor="project-description">Description</label>
      <textarea
        id="project-description"
        rows="3"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      {error && (
        <p className="error" role="alert">
          {error}
        </p>
      )}

      <button type="submit" className="button">
        Add
      </button>
    </form>
  );
}

export default ProjectForm;
