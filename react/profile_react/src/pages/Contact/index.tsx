import { useForm } from "react-hook-form";
import { Container, FormContent } from "./styles";

export function Contact() {
  const { register, formState: { isSubmitting }, handleSubmit, reset } = useForm()

  function onHandleSubmit(data: any) {
    console.log(data)
    reset()
  }
  return (
    <Container>
      <h1>CONTATO</h1>

      <FormContent onSubmit={handleSubmit(onHandleSubmit)}>
        <input
          id="name"
          type="text"
          placeholder="Digite seu nome"
          required
          {...register("name")}
        />
        <input
          id="email"
          type="email"
          placeholder="Digite seu e-mail"
          required
          {...register("email")}

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