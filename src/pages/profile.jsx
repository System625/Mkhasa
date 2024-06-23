import * as yup from "yup";
import { Icon } from "@iconify/react";
import { Heading } from "../components/Heading";
import { Wrapper } from "../components/ui/Wrapper";
import { Navigation } from "../components/ui/Navigation";
import { cn } from "../utils/cn";
import { Button } from "../components/ui/Button";
import { Seo } from "../components/Seo";
import { useAuth } from "../hooks/utils/useAuth";
import { useState } from "react";
import { PInput } from "../components/Input";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import axios from "../utils/axios";
import toast from "react-hot-toast";
import { useRef,useEffect } from "react";

export const Component = () => {
  const { getUserEmail, username, getUserId } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [updatingPassword, setUpdatingPassword] = useState(false);
  const [val, setVal] = useState(username);
  const toggle = () => {
    setEditMode((v) => !v);
  };
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


  const nameMutation = useMutation({
    mutationFn: async (values) => {
      try {
        setUpdatingPassword(true);
        await axios.post(`user/change/password/${getUserId()}`, values, {
          headers: { "Content-Type": "application/json" },
        });
        toast.success(error.response?.data?.message || "Password updated");
      } catch (error) {
        toast.error(error.response?.data?.message || "Update attempt failed");
      } finally {
        setUpdatingPassword(false);
      }
    },
  });

  const schema = yup.object().shape({
    currentPassword: yup
      .string()
      .trim()
      .required("Required field")
      .matches(/(?=.*[A-Z])/, "must contain uppercase")
      .matches(/^(?=.*[a-z])/, "Must contain lowercase")
      .min(6, "must be at least 6 characters long")
      .max(50, "must be at most 50 characters long"),
    newPassword: yup
      .string()
      .trim()
      .required("Required field")
      .matches(/(?=.*[A-Z])/, "must contain uppercase")
      .matches(/^(?=.*[a-z])/, "Must contain lowercase")
      .min(6, "must be at least 6 characters long")
      .max(50, "must be at most 50 characters long")
      .notOneOf(
        [yup.ref("currentPassword"), null],
        "Passwords must be different"
      ),
  });

  const formik = useFormik({
    initialValues: { newPassword: "", currentPassword: "" },
    validationSchema: schema,
    onSubmit: async (values) => {
      nameMutation.mutate(values);
    },
  });
  return (
    <>
      <Seo
        title="Mkhasa | Profile"
        type="webapp"
        description="Experience smooth shopping"
        name=""
      />
      <Wrapper className="py-4">
        <Navigation
          location={[
            { description: "Home", to: "/", title: "Go to Home Page" },
            { description: "My Account", to: "/account" },
            { description: "My Profile", to: "" },
          ]}
          className="text-[#3338] py-4"
          iconClassName="text-[#3339] text-2xl"
          currentLocationClassName="text-app-black"
        />
        <Heading>My Profile</Heading>

        <div className="grid gap-6 py-6 md:grid-cols-2">
          <div className={cn("bg-white rounded-xl p-5")}>
            <div className="flex items-center gap-3 border-b-2 pb-4">
              <Heading>Personal Details</Heading>
            </div>
            <div className="pt-6">
              <div>
                <p className="font-bold">Name:</p>
                <div className="flex justify-between gap-6">
                  {editMode ? (
                    <>
                      <input
                        type="text"
                        value={val}
                        className="outline-noe"
                        onChange={(e) => {
                          setVal(e.target.value);
                        }}
                      />
                      <button
                        onClick={() => {
                          nameMutation.mutate({ username: val });
                          toggle();
                        }}
                      >
                        <Icon
                          icon="mingcute:check-2-fill"
                          style={{ fontSize: 32 }}
                        />
                      </button>
                    </>
                  ) : (
                    <>
                      <p>{username}</p>
                      <button onClick={toggle}>
                        <Icon
                          icon="lucide:edit"
                          style={{ fontSize: 32 }}
                          className="text-app-ash-2"
                        />
                      </button>
                    </>
                  )}
                </div>
              </div>
              <div className="py-4">
                <p className="font-bold">Email:</p>
                <p>{getUserEmail()}</p>
              </div>
              <div>
                <p className="font-bold">Phone:</p>
                <p>123 4567 890 79</p>
              </div>
              <div>
                <p className="font-bold">Address</p>
                <p>No 7 morgan Estate</p>
              </div>
            </div>
          </div>

          <div className={cn("bg-white rounded-xl p-5")}>
            <div className="flex items-center gap-3 border-b-2 pb-4">
              <Heading >Reset Password</Heading>
            </div>

            <form onSubmit={formik.handleSubmit} className="pt-6">
              <div className="grid gap-6">
                <PInput
                  placeholder="Enter Current Password"
                  formik={formik}
                  name="currentPassword"
                  className="bg-app-ash-1"
                />
                <PInput
                  placeholder="Enter New Password"
                  formik={formik}
                  name="newPassword"
                  className="bg-app-ash-1"
                />
              </div>
              <Button
                type="submit"
                className="bg-app-black text-white font-medium mt-6 w-28 h-10"
              >
                {updatingPassword ? (
                  <Icon
                    icon="svg-spinners:6-dots-rotate"
                    style={{ fontSize: 20 }}
                    className="mx-auto"
                  />
                ) : (
                  "Reset"
                )}
              </Button>
            </form>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
