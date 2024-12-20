import React from "react";
import { useForm } from "react-hook-form";

import registerImage from '../assets/register-desktop.svg';
import registerImageMobile from '../assets/register-mobile.svg';

export default function RegisterModal() {
  console.log(useForm)
  const onSubmit = (d) => console.log(d);

  const { register, handleSubmit } = useForm();
  
  return (
    <div
      className="modal fade"
      id="registerModal"
      tabIndex={-1}
      aria-labelledby="registerModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <img src={registerImage} className="img-fluid mx-auto d-none d-md-block" alt="..."></img>
            <img src={registerImageMobile} className="d-block mx-auto d-md-none img-fluid" alt="..."></img>
            <form className="mt-3" noValidate>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nome
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Digite seu nome completo"
                    required
             
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  E-mail
                </label>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Digite seu e-mail"
                    required
                 
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Senha
                </label>
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Digite sua senha"
                    required
               
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Confirme sua senha
                </label>
                <div className="input-group has-validation">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Confirme sua senha"
                    required
             
                  />
                  <div className="invalid-feedback">
                    As senhas devem ser iguais
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="disclaimer"></input>
                  <label className="form-check-label" htmlFor="disclaimer">
                    <small>Li e estou ciente quanto às condições de tratamento dos meus dados conforme descrito na Política de Privacidade do banco.</small>
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-success w-100">
                Criar conta
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
