import success from "../assets/images/success_check.webp";
import { Link } from "react-router-dom";
import { Wrapper } from "../components/ui/Wrapper";

export const Component = () => {
  return (
    <Wrapper className="py-8">
      <div className="flex flex-col items-center mx-auto my-10 w-fit">
        <img src={success} alt="" />
        <h2 className="mt-6 text-xl font-bold">Successfully</h2>
        <p>your account has been created</p>
        <Link
          to="/"
          className="bg-app-black px-[120px] text-white mt-6 font-bold text-xl rounded-full py-2"
          replace
        >
          Okay
        </Link>
      </div>
    </Wrapper>
  );
};
