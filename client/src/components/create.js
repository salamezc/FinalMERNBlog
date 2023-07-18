import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
  const [form, setForm] = useState({
    name: "",
    title: "",
    content: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };

    await fetch("http://localhost:5050/record", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
      .catch(error => {
        window.alert(error);
        return;
      });

    setForm({ name: "", title: "", content: "" });
    navigate("/");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3 class="mx-auto" style={{ width: "150px", marginTop: "25px" }}>New Blog</h3>
      <form onSubmit={onSubmit}>
        <div style={{ width: "400px", marginLeft: "425px"}} className="form-group">
          <label style={{marginBottom:"5px"}} htmlFor="name">Author Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div style={{ width: "400px", marginLeft: "425px"}} className="form-group">
          <label style={{marginBottom:"5px"}} htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={form.title}
            onChange={(e) => updateForm({ title: e.target.value })}
          />
        </div>
        <div style={{ width: "400px", marginLeft: "425px", marginBottom: "25px"}} className="form-group">
          <label style={{marginBottom:"5px"}} htmlFor="content">Content</label>
          <textarea
            type="text"
            className="form-control"
            id="content"
            rows="3"
            value={form.content}
            onChange={(e) => updateForm({ content: e.target.value })}
          ></textarea>
        </div>
        <div style={{ width: "125px", marginLeft: "555px" }} className="form-group">
          <input
            type="submit"
            value="Create Blog"
            className="btn btn-dark btn-lg"
          />
        </div>
      </form>
    </div>
  );
}