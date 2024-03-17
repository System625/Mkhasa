import { useRouteError } from "react-router-dom";
import { Wrapper } from "../components/Wrapper";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col min-h-dvh">
      <header className="bg-white">
        <Navbar />
      </header>
      <Wrapper className="pt-12">
        <h1 className="text-app-red font-fuzzy">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </Wrapper>
      <Footer />
    </div>
  );
}
