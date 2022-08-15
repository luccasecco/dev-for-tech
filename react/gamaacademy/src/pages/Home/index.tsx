import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function Home() {


  return (
    <>
      <Header />
        <Container>
          <h1>Home</h1>
        </Container>
      <Footer />
    </>
  )
}