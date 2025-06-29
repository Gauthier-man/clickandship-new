import React from "react";
import Header from "./Header.jsx";

export default function Login() {
  return (
    <>
      <Header />
      <div className="form-login">
        <h1>Connexion</h1>
        <form action="">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Mot de passe" />
          <button>Se Connecter</button>
        </form>
      </div>
    </>
  );
}
