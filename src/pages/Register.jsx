import React from "react";
import Header from "./Header.jsx";

export default function Register() {
  return (
    <>
      <Header />
      <div className="form-register">
        <h1>Inscription</h1>
        <form action="POST">
          <label for="mail">Adresse e-mail</label>
          <input type="email" placeholder="Email" />
          <label for="mail">Mot de passe</label>
          <input type="password" placeholder="Mot de passe" />
          <label for="mail">Confirmer le mot de passe</label>
          <input type="password" placeholder="Confirmer le mot de passe" />
          <button>S'inscrire</button>
        </form>
      </div>
    </>
  );
}
