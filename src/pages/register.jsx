// import * as yup from "yup";
// import { useFormik } from "formik";
// import { Link, useNavigate } from "react-router-dom";
// import { Heading } from "../components/Heading";
// import { Wrapper } from "../components/ui/Wrapper";
// import { Button } from "../components/ui/Button";
// import { Input, PInput } from "../components/Input";
// import { useCanSubmitForm } from "../hooks/utils/useCanSubmitFormik";
// import { useState } from "react";
// import { Icon } from "@iconify/react";
// import axios from "../utils/axios";
// import { Seo } from "../components/Seo";

// export const Component = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const navigate = useNavigate();
//   const schema = yup.object().shape({
//     username: yup.string().required().min(3, "must be at least 3 characters"),
//     phone: yup.string().required(),
//     email: yup.string().email().required(),
//     password: yup
//       .string()
//       .trim()
//       .required()
//       .matches(/(?=.*[A-Z])/, "must contain uppercase")
//       .matches(/^(?=.*[a-z])/, "Must contain lowercase")
//       .min(6, "must be at least 6 characters long")
//       .max(50, "must be at most 50 characters long"),
//   });

//   const formik = useFormik({
//     initialValues: { email: "", password: "", username: "", phone: "" },
//     validationSchema: schema,
//     onSubmit: async (values, {}) => {
//       try {
//         setIsSubmitting(true);
//         const response = await axios.post(`user/send/verification`, values, {
//           headers: { "Content-Type": "application/json" },
//         });
//         if (response.status === 200) {
//           setIsSubmitting(false);
//           console.log(response);
//           navigate(`/confirm-otp?email=${encodeURIComponent(values.email)}`);
//         }
//         console.log(response)
//       } catch (error) {
//         setIsSubmitting(false);
//         console.log(error.response.data.message);
//       }
//     },
//   });

//   const canSubmit = useCanSubmitForm(formik);

//   return (
//     <>
//         <Seo
//           title="Mkhasa | Register"
//           type="webapp"
//           description="Register to experience smooth shopping"
//           name=""
//         />
//       <Wrapper className="max-w-xl flex flex-col items-center py-12">
//         <Heading>Register</Heading>
//         <p className="text-[#666666] py-4 text-center">
//           Create Your account, Already have an account?
//           <Link to="/login" className="text-app-black ml-2 underline">
//             Login Here
//           </Link>
//         </p>

//         <form
//           onSubmit={formik.handleSubmit}
//           className="w-full max-w-xl bg-white rounded-3xl p-4    font-Helvetica"
//         >
//           <div className="grid gap-x-4 sm:grid-cols-2">
//             <Input
//               name="username"
//               formik={formik}
//               className="bg-app-ash-1"
//               placeholder="Full Name"
//             />
//             <Input
//               name="phone"
//               type="tel"
//               formik={formik}
//               className="bg-app-ash-1"
//               placeholder="Phone Number"
//             />
//             <Input
//               name="email"
//               formik={formik}
//               className="bg-app-ash-1"
//               placeholder="Email Address"
//             />
//             <PInput
//               name="password"
//               formik={formik}
//               className="bg-app-ash-1"
//               placeholder="Password"
//             />
//           </div>

//           <Button
//             className="w-full flex justify-center bg-app-red hover:bg-red-500 text-sm  text-white font-bold mt-4 sm:hover:bg-black disabled:bg-[#999999] hover:disabled:bg-[#999999] sm:bg-app-black"
//             type="submit"
//             disabled={!canSubmit}
//           >
//             {isSubmitting ? (
//               <Icon
//                 icon="svg-spinners:6-dots-rotate"
//                 style={{ fontSize: 20 }}
//               />
//             ) : (
//               "Register"
//             )}
//           </Button>
//         </form>
//       </Wrapper>
//     </>
//   );
// };

import * as yup from "yup";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { Heading } from "../components/Heading";
import { Wrapper } from "../components/ui/Wrapper";
import { Button } from "../components/ui/Button";
import { Input, PInput } from "../components/Input";
import { useCanSubmitForm } from "../hooks/utils/useCanSubmitFormik";
import { useState } from "react";
import { Icon } from "@iconify/react";
import axios from "../utils/axios";
import { Seo } from "../components/Seo";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Component = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    address: yup.string().required().min(3, "Must be at least 3 characters"),
    phoneNumber: yup
      .string()
      .required("Phone number is required")
      .matches(/^\d+$/, "Phone number must contain only digits"),
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .trim()
      .required("Password is required")
      .matches(/(?=.*[A-Z])/, "Password must contain uppercase")
      .matches(/^(?=.*[a-z])/, "Password must contain lowercase")
      .min(6, "Password must be at least 6 characters long")
      .max(50, "Password must be at most 50 characters long"),
  });

  const formik = useFormik({
    initialValues: { email: "", password: "", address: "", phoneNumber: "" , },
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        setIsSubmitting(true);
        const response = await axios.post(`user/send/verification`, values, {
          headers: { "Content-Type": "application/json" },
        });
        if (response.status === 200) {
          setIsSubmitting(false);
          navigate(`/confirm-otp?email=${encodeURIComponent(values.email)}`);
        }
      } catch (error) {
        setIsSubmitting(false);
        // console.log(error.response.data.message);
        toast.error(error.response.data.message);
      }
    },
  });

  const canSubmit = useCanSubmitForm(formik);

  return (
    <>
      <Seo
        title="Mkhasa | Register"
        type="webapp"
        description="Register to experience smooth shopping"
        name=""
      />
      <Wrapper className="max-w-xl flex flex-col items-center py-12">
        <Heading>Register</Heading>
        <p className="text-[#666666] py-4 text-center">
          Create Your account, Already have an account?
          <Link to="/login" className="text-app-black ml-2 underline">
            Login Here
          </Link>
        </p>

        <form
          onSubmit={formik.handleSubmit}
          className="w-full max-w-xl bg-white rounded-3xl p-4 font-Helvetica"
        >
          <div className="grid gap-x-4 sm:grid-cols-2">
          <Input
              name="email"
              formik={formik}
              className="bg-app-ash-1"
              placeholder="Email Address"
            />
            <Input
              name="phoneNumber"
              formik={formik}
              className="bg-app-ash-1"
              placeholder="Phone Number"
              type="tel"
            />
          
             <Input
              name="address"
              formik={formik}
              className="bg-app-ash-1"
              placeholder="address"
            />
            <PInput
              name="password"
              formik={formik}
              className="bg-app-ash-1"
              placeholder="Password"
            />
          </div>

          <Button
            className="w-full flex justify-center bg-app-red hover:bg-red-500 text-sm text-white font-bold mt-4 sm:hover:bg-black disabled:bg-[#999999] hover:disabled:bg-[#999999] sm:bg-app-black"
            type="submit"
            disabled={!canSubmit}
          >
            {isSubmitting ? (
              <Icon
                icon="svg-spinners:6-dots-rotate"
                style={{ fontSize: 20 }}
              />
            ) : (
              "Register"
            )}
          </Button>
        </form>
      </Wrapper>
      <ToastContainer />
    </>
  );
};


