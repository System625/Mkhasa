import { useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Wrapper } from "../components/ui/Wrapper";
import { Seo } from "../components/Seo";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col min-h-dvh">
      <Seo
        title="Mkhasa | Error"
        description="Complete TranscationF"
        type="webapp"
        name=""
      />
      <header className="bg-white">
        <Navbar />
      </header>
      <Wrapper className="pt-12">
        <h1 className="text-app-red    font-Helvetica">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </Wrapper>
      <Footer />
    </div>
  );
}
