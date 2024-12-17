import React from "react";
import loginImage from '../assets/login-desktop.svg';
import loginImageMobile from '../assets/login-mobile.svg';

export default function LoginModal() {
  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex={-1}
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <img src={loginImage} className="img-fluid mx-auto d-none d-md-block" alt="..."></img>
            <img src={loginImageMobile} className="d-block mx-auto d-md-none img-fluid" alt="..."></img>
            <form className="mt-3">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  E-mail
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Digite seu e-mail"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Senha
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Digite sua senha"
                  required
                />
              </div>
              <div className="mb-3 text-end">
                <a href="#" className="text-decoration-none text-danger">
                  <small>Esqueci minha senha</small>
                </a>
              </div>
              <button type="submit" className="btn btn-success w-100">
                Acessar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
