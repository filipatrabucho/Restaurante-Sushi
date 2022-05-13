import React from "react";
import { useForm } from "react-hook-form";
import "./contact.css";

const ContactApp = () => {
  // handle events
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  //Submit Event
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <>
      <div className="contacts">
        <h2 className="contacts__subtitle">Fale Connosco</h2>
        <div className="contacts__container">
          <h2 className="contacts__title">Contatos</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              {errors.fullName && (
                <span className="contacts__error">
                  {errors.fullName.message}
                </span>
              )}
            </div>
            <input
              type="text"
              className="contacts__input"
              placeholder="Nome"
              {...register("fullName", {
                //Requirement of a Name
                required: {
                  value: true,
                  message: "Campo Obrigatório",
                },
                //Min of Characters
                minLength: {
                  value: 3,
                  message: "Por favor introduza um nome válido",
                },
                //Max of Characters
                maxLength: {
                  value: 20,
                  message: "Máximo de Carateres é de 20 ",
                },
                //Types of Characters
                pattern: {
                  value: /[a-zA-Z]+/,
                  message: "Introduza apenas letras",
                },
              })}
            />
            <div>
              {errors.email && (
                <span className="contacts__error">{errors.email.message}</span>
              )}
            </div>
            <input
              type="email"
              placeholder="seu_email@email.com"
              className={`contacts__input ${errors.email}`}
              {...register("email", {
                //Requirement of a email
                required: {
                  value: true,
                  message: "Campo Obrigatório",
                },
                //Characteristics of a Email
                pattern: {
                  value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                  message: "Por favor escreva um email válido",
                },
              })}
            />
            <div>
              {errors.message && (
                <span className="contacts__error">
                  {errors.message.message}
                </span>
              )}
            </div>
            <textarea
              placeholder="Mensagem"
              className={`contacts__input ${errors.message}`}
              {...register("message", {
                //Requirement of a message
                required: {
                  value: true,
                  message: "Campo Obrigatório",
                },
                //Min off characters
                minLength: {
                  value: 5,
                  message: "Por escreva uma mensagem válida",
                },
                // Max off characters
                maxLength: {
                  value: 60,
                  message: "Máximo de Carateres é de 60",
                },
              })}
            />
            <button className="btn">Enivar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactApp;
