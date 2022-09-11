import { ArrowArcLeft } from "phosphor-react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { Container, FormContent } from "./styles";

export function Contact() {
  const { register, formState: { isSubmitting }, handleSubmit, reset } = useForm()

  function onHandleSubmit(data: any) {
    toast.success("Mensagem enviada com sucesso!")
    console.log(data)
    reset()
  }
  return (
    <Container>
      <div>
        <h1>CONTATO</h1>
        <div className="back-to-home">
          <NavLink to="/"><ArrowArcLeft size={25} />Início</NavLink>
        </div>
      </div>
      <FormContent onSubmit={handleSubmit(onHandleSubmit)}>
        <input
          id="user_name"
          type="text"
          placeholder="Digite seu nome"
          required
          {...register("user_name")}
        />
        <input
          id="user_email"
          type="email"
          placeholder="Digite seu e-mail"
          required
          {...register("user_email")}

        />
        <textarea
          id="message"
          placeholder="Digite sua mensagem"
          required
          {...register("message")}
        />
        <button type="submit" disabled={isSubmitting}>Enviar</button>
      </FormContent>

    </Container>
  )
}