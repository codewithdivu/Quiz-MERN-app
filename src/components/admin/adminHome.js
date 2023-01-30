import React from "react";

const AdminHome = () => {
  return (
    <>
      <main className="main">
        <h1 className="title">
          Welcome to <a href="#">Quiz - app</a>
        </h1>

        <p className="description">
          Let's Get started by <code className="code">PLAYING</code>
        </p>

        <div className="grid">
          <a href="/admin/addQuestions" className="card">
            <h2>Add Questions &rarr;</h2>
            <p>Here Admin can add New Questions</p>
          </a>

          <a href="/admin/listQuestions" className="card">
            <h2>List All Questions &rarr;</h2>
            <p>Here you can find all of this Questions</p>
          </a>
        </div>
      </main>
    </>
  );
};

export default AdminHome;
