import React from "react";

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-6">Task Management System</h1>

      <p className="mb-4 text-lg">
        A full-featured task management system built using the MERN stack.
      </p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Tech Stack:</h2>
        <ul className="list-disc list-inside">
          <li>MongoDB</li>
          <li>Express.js</li>
          <li>React.js</li>
          <li>Node.js</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Key Features:</h2>
        <ul className="list-disc list-inside">
          <li>Admin & User roles</li>
          <li>Task creation, assignment, and status tracking</li>
          <li>Commenting with image/file support</li>
          <li>Realtime updates with Socket.IO</li>
        </ul>
      </div>
    </main>
  );
}
