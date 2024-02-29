import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-[#D9D9D9] w-full h-full pt-5 flex flex-col items-center px-2 py-10 justify-between">
      <h2 className="pt-4 text-lg font-bold text-black">Register</h2>
      <p className="text-[#555555] mt-4">
        Create Your account, Already have an account?
        <span className="text-white">
          <Link to="/login">Log in Here </Link>
        </span>
      </p>

      <form className="w-full max-w-lg bg-[#FFF] overflow-hidden rounded-xl px-6 py-2 mt-4 pt-4">
        <div className="flex flex-wrap  mb-4 px-2  py-2 -mx-3">
          <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <input
              className="block w-full px-4 py-3  leading-tight text-xs text-[#555] bg-[#F5F5F5] border  rounded-full appearance-none focus:outline-none focus:[#C4C4C4]"
              id="full-name"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div className="w-full px-3 md:w-1/2">
            <input
              className="block w-full px-4 py-3 leading-tight text-xs text-[#555] bg-[#FFFFFF] border rounded-lg appearance-none focus:outline-none focus:bg-white focus:[#C4C4C4]"
              id="PhoneNumber"
              type="text"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-1">
          <div className="w-full px-3 md:w-1/2 md:mb-0">
            <input
              className="block w-full px-4 py-3 mb-3 leading-tight text-xs text-[#555] bg-[#F5F5F5] border  rounded-full appearance-none focus:outline-none focus:[#C4C4C4]"
              id="Email"
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div className="w-full px-3 md:w-1/2 md:mb-0">
            <input
              className="block w-full px-4 py-3 mb-3 leading-tight text-xs text-[#555] bg-[#F5F5F5] border  rounded-full appearance-none focus:outline-none focus:[#C4C4C4]"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="w-full px-3 mb-4">
            <button
              className="shadow-sm w-full bg-[#000] hover:bg-[#000] text-sm focus:shadow-outline focus:outline-none text-white font-bold py-2 px-10 rounded-full"
              type="button"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
