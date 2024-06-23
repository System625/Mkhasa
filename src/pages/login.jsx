// import * as yup from "yup";
// import { useFormik } from "formik";
// import { Link, useNavigate, useSearchParams } from "react-router-dom";
// import { Heading } from "../components/Heading";
// import { Input, PInput } from "../components/Input";
// import { useAuth } from "../hooks/utils/useAuth";
// import { useCanSubmitForm } from "../hooks/utils/useCanSubmitFormik";
// import { Wrapper } from "../components/ui/Wrapper";
// import { Button } from "../components/ui/Button";
// import { Icon } from "@iconify/react";
// import axios from "../utils/axios";
// import { Seo } from "../components/Seo";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import toast from "react-hot-toast";
// import { prefix } from "../utils/lib";

// export const Component = () => {
//   const queryClient = useQueryClient();
//   const schema = yup.object().shape({
//     email: yup.string().email().required(),
//     password: yup
//       .string()
//       .trim()
//       .required()
//       .matches(/(?=.*[A-Z])/, "must contain uppercase")
//       .matches(/^(?=.*[a-z])/, "Must contain lowercase")
//       .min(6, "must be at least 6 characters long")
//       .max(50, "must be at most 50 characters long"),
//     // .matches(/(?=.*[^\w\d\s])/, "must contain special character")
//   });

//   const naigate = useNavigate();
//   const { setUser } = useAuth();
//   const [searchParams] = useSearchParams();
//   const redirect = searchParams.get("redirect") || "/";

//   const mutation = useMutation({
//     mutationFn: (values) => {
//       return axios.post(`user/login`, values, {
//         headers: { "Content-Type": "application/json" },
//       });
//     },
//     onSuccess: (response) => {
//       setUser(response.data);
//       localStorage.setItem(prefix("user"), JSON.stringify(response.data));
//       queryClient.setQueryData(["cart"], response.data.cart);
//       naigate(decodeURIComponent(redirect));
//     },
//     onError: () => {
//       toast.error("Login attempt failed:Check that your email or password is inputed correctly");
//     },
//   });

//   const formik = useFormik({
//     initialValues: { email: "", password: "" },
//     validationSchema: schema,
//     onSubmit: async (values) => {
//       mutation.mutate(values);
//     },
//   });

//   const canSubmit = useCanSubmitForm(formik);

//   return (
//     <Wrapper className="flex flex-col items-center max-w-lg py-12">
//       <Seo
//         title="Mkhasa | Login"
//         type="webapp"
//         description="login to your account"
//         name=""
//       />
//       <Heading>Login</Heading>
//       <p className="py-4 text-[#666666] text-center    font-Helvetica">
//         Your Welcome back don&rsquo;t have an account?
//         <Link to="/register" className="ml-2 text-app-black  underline hover:underline    font-Helvetica z-50">
//           Register Here{" "}
//         </Link>
//       </p>

//       <form onSubmit={formik.handleSubmit} className="w-full">
//         <Input name="email" formik={formik} placeholder="Email" />
//         <PInput name="password" formik={formik} placeholder="Password" />

//         <Link
//           to={"/forgot-password"}
//           className="inline-block w-full pb-6 text-right text-app-black"
//         >
//           Forgot Password?
//         </Link>

//         <Button
//           className="w-full flex justify-center bg-app-red hover:bg-red-500 text-sm  text-white font-bold mt-4 sm:hover:bg-black disabled:bg-[#999999] hover:disabled:bg-[#999999] sm:bg-app-black"
//           type="submit"
//           disabled={!canSubmit}
//         >
//           {mutation.isPending ? (
//             <Icon icon="svg-spinners:6-dots-rotate" style={{ fontSize: 20 }} />
//           ) : (
//             "Login"
//           )}
//         </Button>
//       </form>
//     </Wrapper>
//   );
// };

import * as yup from "yup";
import { useFormik } from "formik";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Heading } from "../components/Heading";
import { Input, PInput } from "../components/Input";
import { useAuth } from "../hooks/utils/useAuth";
import { useCanSubmitForm } from "../hooks/utils/useCanSubmitFormik";
import { Wrapper } from "../components/ui/Wrapper";
import { Button } from "../components/ui/Button";
import { Icon } from "@iconify/react";
import axios from "../utils/axios";
import { Seo } from "../components/Seo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { prefix } from "../utils/lib";
import { useState } from "react";

export const Component = () => {
  const queryClient = useQueryClient();
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup
      .string()
      .trim()
      .required()
      .matches(/(?=.*[A-Z])/, "must contain uppercase")
      .matches(/^(?=.*[a-z])/, "Must contain lowercase")
      .min(6, "must be at least 6 characters long")
      .max(50, "must be at most 50 characters long"),
  });

  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";
  const [error, setError] = useState("");

  const mutation = useMutation({
    mutationFn: (values) => {
      return axios.post(`user/login`, values, {
        headers: { "Content-Type": "application/json" },
      });
    },
    onSuccess: (response) => {
      setUser(response.data);
      localStorage.setItem(prefix("user"), JSON.stringify(response.data));
      queryClient.setQueryData(["cart"], response.data.cart);
      navigate(decodeURIComponent(redirect));
    },
    onError: (err) => {
      // console.log("Login error response:", err.response);
      if (err.response && err.response.data) {
        const errorMessage = err.response.data.message;
        if (errorMessage.includes("email")) {
          setError("Wrong email");
        } else if (errorMessage.includes("password")) {
          setError("Wrong password");
        } else {
          setError("Invalid Email or Password");
        }
      } else {
        setError("Invalid Email or Password");
      }
      toast.error(error);
    },
  });

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit: async (values) => {
      setError(""); // Clear any previous errors
      mutation.mutate(values);
    },
  });

  const canSubmit = useCanSubmitForm(formik);

  return (
    <Wrapper className="flex flex-col items-center max-w-lg py-12">
      <Seo
        title="Mkhasa | Login"
        type="webapp"
        description="login to your account"
        name=""
      />
      <Heading>Login</Heading>
      <p className="py-4 text-[#666666] text-center    font-Helvetica">
        Your Welcome back don&rsquo;t have an account?
        <Link to="/register" className="ml-2 text-app-black underline hover:underline    font-Helvetica z-50">
          Register Here{" "}
        </Link>
      </p>

      <form onSubmit={formik.handleSubmit} className="w-full">
        <Input name="email" formik={formik} placeholder="Email" className="bg-app-ash-1" />
        <PInput name="password" formik={formik} placeholder="Password"  className="bg-app-ash-1" />
        
        {error && <div className="text-red-500 text-center">{error}</div>}

        <Link
          to={"/forgot-password"}
          className="inline-block w-full pb-6 text-right text-app-black"
        >
          Forgot Password?
        </Link>

        <Button
          className="w-full flex justify-center bg-app-red hover:bg-red-500 text-sm text-white font-bold mt-4 sm:hover:bg-black disabled:bg-[#999999] hover:disabled:bg-[#999999] sm:bg-app-black"
          type="submit"
          disabled={!canSubmit}
        >
          {mutation.isLoading ? (
            <Icon icon="svg-spinners:6-dots-rotate" style={{ fontSize: 20 }} />
          ) : (
            "Login"
          )}
        </Button>
      </form>
    </Wrapper>
  );
};

