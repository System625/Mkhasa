import { Button } from "../components/ui/Button";
import { Navigation } from "../components/ui/Navigation";
import { Wrapper } from "../components/ui/Wrapper";
import { useCartQuery } from "../hooks/query/useCart";
import { Seo } from "../components/Seo";
import { Heading } from "../components/Heading";
import { OrderSummary } from "../components/OrderTotal";
import { CartItems } from "../components/Cart";
import { cn } from "../utils/cn";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/utils/useAuth";
import axios from "../utils/axios";
import { useMutation } from "@tanstack/react-query";
import { Icon } from "@iconify/react";
import * as yup from "yup";
import { Input } from "../components/Input";
import { useFormik } from "formik";
import paystackImg from "../assets/images/paystack.svg";
import flutterImg from "../assets/images/flutter1.svg";

export const Component = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    phone: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    country: yup.string().required(),
    name: yup.string().required(),
    address: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      country: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      mutation.mutate(values);
    },
  });

  const [provider, setProvider] = useState("flutterwave");

  const { getUserId } = useAuth();
  const mutation = useMutation({
    mutationFn: (payload) => {
      return axios.post(`create/order/${getUserId()}`, {
        provider,
        ...payload,
      });
    },
    onSuccess: (res) => {
      window.location.href = res.data.paymentLink;
    },
  });

  useEffect(() => {
    axios.get(`/get/user/${getUserId()}`).then((res) => {
      formik.setValues({
        email: res.data.user.email,
        phone: res.data.user.phoneNumber,
        address: res.data.user.address,
        name: formik.values.name, // Retain current value if already entered
        city: formik.values.city, // Retain current value if already entered
        state: formik.values.state, // Retain current value if already entered
        country: formik.values.country, // Retain current value if already entered
      });
    });
  }, []);

  // useEffect(() => {
  //   console.log(formik.values.state);
  // }, [formik.values.state]);

  return (
    <main>
      <Seo
        title="Mhkasa | Checkout"
        description="Complete Transaction"
        type="webapp"
        name=""
      />

      <Wrapper className="py-4">
       
        <div className="grid gap-6 md:grid-cols-12">
          <form
            onSubmit={formik.handleSubmit}
            id="checkout-form"
            className="grid md:col-span-6 lg:col-span-7 xl:col-span-8"
          >
            <PersonalDetails formik={formik} />
            <DeliveryDetails formik={formik} />
            <PaymentMethod setProvider={setProvider} provider={provider} />
          </form>
          <div className="md:col-span-6 lg:col-span-5 xl:col-span-4">
            <CartSummary
              isPending={mutation.isPending}
              deliveryState={formik.values.state}
            />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const PersonalDetails = ({ className, formik }) => {
  return (
    <div className={cn("bg-white rounded-xl p-5", className)}>
      <div className="flex items-center gap-3 border-b-2 pb-4">
        <p className="bg-app-ash-1 w-8 aspect-square rounded-full grid place-items-center font-bold">
          1
        </p>
        <Heading className="text-black">Personal Details</Heading>
      </div>
      <div className="@container py-4 grid gap-3">
        <div>
          <Input
            placeholder="Your Full Name"
            formik={formik}
            name="name"
            className="rounded-sm bg-app-ash-1"
          />
        </div>

        <div className="grid w-full gap-3 @md:grid-cols-2">
          <Input
            placeholder="Your Email"
            formik={formik}
            name="email"
            className="rounded-sm bg-app-ash-1"
          />
          <Input
            placeholder="Your Phone"
            formik={formik}
            name="phone"
            className="rounded-sm bg-app-ash-1"
          />
        </div>
      </div>
    </div>
  );
};

const DeliveryDetails = ({ className, formik }) => {
  // add complete list here
  const states = [
    {
      name: "Abia",
      value: "abia",
    },
    {
      name: "Adamawa",
      value: "adamawa",
    },
    {
      name: "Akwa Ibom",
      value: "akwa_ibom",
    },
    {
      name: "Anambra",
      value: "anambra",
    },
    {
      name: "Bauchi",
      value: "bauchi",
    },
    {
      name: "Bayelsa",
      value: "bayelsa",
    },
    {
      name: "Benue",
      value: "benue",
    },
    {
      name: "Borno",
      value: "borno",
    },
    {
      name: "Cross River",
      value: "cross_river",
    },
    {
      name: "Delta",
      value: "delta",
    },
    {
      name: "Ebonyi",
      value: "ebonyi",
    },
    {
      name: "Edo",
      value: "edo",
    },
    {
      name: "Ekiti",
      value: "ekiti",
    },
    {
      name: "Enugu",
      value: "enugu",
    },
    {
      name: "FCT - Abuja",
      value: "fct_abuja",
    },
    {
      name: "Gombe",
      value: "gombe",
    },
    {
      name: "Imo",
      value: "imo",
    },
    {
      name: "Jigawa",
      value: "jigawa",
    },
    {
      name: "Kaduna",
      value: "kaduna",
    },
    {
      name: "Kano",
      value: "kano",
    },
    {
      name: "Katsina",
      value: "katsina",
    },
    {
      name: "Kebbi",
      value: "kebbi",
    },
    {
      name: "Kogi",
      value: "kogi",
    },
    {
      name: "Kwara",
      value: "kwara",
    },
    {
      name: "Lagos",
      value: "lagos",
    },
    {
      name: "Nasarawa",
      value: "nasarawa",
    },
    {
      name: "Niger",
      value: "niger",
    },
    {
      name: "Ogun",
      value: "ogun",
    },
    {
      name: "Ondo",
      value: "ondo",
    },
    {
      name: "Osun",
      value: "osun",
    },
    {
      name: "Oyo",
      value: "oyo",
    },
    {
      name: "Plateau",
      value: "plateau",
    },
    {
      name: "Rivers",
      value: "rivers",
    },
    {
      name: "Sokoto",
      value: "sokoto",
    },
    {
      name: "Taraba",
      value: "taraba",
    },
    {
      name: "Yobe",
      value: "yobe",
    },
    {
      name: "Zamfara",
      value: "zamfara",
    },
  ];

  return (
    <div className={cn("bg-white rounded-xl p-5", className)}>
      <div className="flex items-center gap-3 border-b-2 pb-4">
        <p className="bg-app-ash-1 w-8 aspect-square rounded-full grid place-items-center font-bold">
          2
        </p>
        <Heading className="text-black">Delivery Details</Heading>
      </div>
      <div className="@container py-4 grid gap-3">
        <div className="grid gap-3 grid-cols-12">
          <div className="col-span-12 @sm:col-span-8">
            <Input
              type="text"
              placeholder="Address"
              formik={formik}
              name="address"
              className="bg-app-ash-1 rounded-sm"
            />
          </div>
          <div className="col-span-12 @sm:col-span-4">
            <Input
              type="text"
              placeholder="City"
              formik={formik}
              name="city"
              className="bg-app-ash-1 rounded-sm"
            />
          </div>
        </div>

        <div className="grid gap-3 grid-cols-12">
          <div className="col-span-12 @sm:col-span-6">
            {/* <Input
              type="text"
              placeholder="State"
              formik={formik}
              name="state"
              className="bg-app-ash-1 rounded-sm"
            /> */}
            <div className="py-2 w-full bg-app-ash-1">
              <select
                {...formik.getFieldProps("state")}
                className="bg-app-ash-1 rounded-sm  w-full py-2 px-6 outline-none"
                placeholder="State"
              >
                <option value="" selected>
                  Select state
                </option>
                {states.map(({ name, value }, i) => (
                  <option key={i} value={value} className="bg-app-ash-1">
                    {name}
                  </option>
                ))}
              </select>
              {formik.touched.state && formik.errors.state && (
                <p className="text-app-red"> {formik.errors.state}</p>
              )}
            </div>
          </div>
          <div className="col-span-12 @sm:col-span-6">
            <Input
              type="text"
              placeholder="Country"
              formik={formik}
              name="country"
              className="bg-app-ash-1 rounded-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const PaymentMethod = ({ className, setProvider, provider }) => {
  const handleProviderChange = (event) => {
    setProvider(event.target.value);
  };

  return (
    <div className={cn("bg-white rounded-xl p-5", className)}>
      <div className="flex items-center gap-3 border-b-2 pb-4">
        <p className="bg-app-ash-1 w-8 aspect-square rounded-full grid place-items-center font-bold">
          3
        </p>
        <Heading className="text-black">Payment Method</Heading>
      </div>
      <div className="py-4 grid gap-4">
        <div className="flex">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="flutterwave"
              name="paymentProvider"
              value="flutterwave"
              checked={provider === "flutterwave"}
              onChange={handleProviderChange}
            />
            <label htmlFor="flutterwave" className="flex items-center gap-2">
              <img
                src={flutterImg}
                className="w-18 h-18"
                alt="flutterwave-logo"
              />
            </label>
          </div>
          {/* <div className="flex items-center gap-2">
            <input
              type="radio"
              id="paystack"
              name="paymentProvider"
              value="paystack"
              checked={provider === "paystack"}
              onChange={handleProviderChange}
            />
            <label htmlFor="paystack" className="flex items-center gap-2">
              <img
                src={paystackImg}
                className="w-18 h-18"
                alt="paystack-logo"
              />
            </label>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const CartSummary = ({ className, isPending, deliveryState }) => {
  const { data } = useCartQuery();

  return (
    <div className={cn("bg-white rounded-xl p-5", className)}>
      <div className="flex items-center gap-3 border-b-2 pb-4">
        <Heading className="text-app-black">Item(s)</Heading>
      </div>
      <div>
        <CartItems isCheckout />
        <OrderSummary state={deliveryState} />

        {!data?.items || data.items.length === 0 ? null : (
          <Button
            type="submit"
            form="checkout-form"
            variant="rectangle"
            className="bg-[#27D34C] text-white md:px-8 w-full px-10 focus:outline-none font-bold mt-6"
          >
            {isPending ? (
              <Icon
                icon="svg-spinners:6-dots-rotate"
                style={{ fontSize: 20 }}
                className="text-center"
              />
            ) : (
              "Pay Now"
            )}
          </Button>
        )}
      </div>
    </div>
  );
};