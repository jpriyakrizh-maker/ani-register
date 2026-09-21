import { useState } from "react";
import Scene3D from "./components/Scene3D";
import RegisterForm from "./components/RegisterForm";
import "./App.css";

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="app">
      {/* Gradient Background */}
      <div className="background-glow glow-one"></div>
      <div className="background-glow glow-two"></div>
      <div className="background-glow glow-three"></div>

      {/* 3D Character */}
      <Scene3D
        onAnimationComplete={() => setShowForm(true)}
      />

      {/* Register Form */}
      <div
        className={`form-wrapper ${
          showForm ? "show" : ""
        }`}
      >
        <RegisterForm />
      </div>
    </main>
  );
}

export default App;