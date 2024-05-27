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

  const [provider, setProvider] = useState("paystack");

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
      formik.values.email = res.data.user.email;
      formik.values.phone = res.data.user.phoneNumber;
      formik.values.address = res.data.user.address;
    });
  }, []);

  return (
    <main>
      <Seo
        title="Mhkasa | Checkout"
        description="Complete TranscationF"
        type="webapp"
        name=""
      />

      <Wrapper className="py-4">
        <Navigation
          location={[
            { description: "Home", to: "/", title: "Go to Home Page" },
            { description: "Cart", to: "/cart" },
            { description: "Checkout", to: "" },
          ]}
          className="text-[#3338] py-4"
          iconClassName="text-[#3339] text-2xl"
          currentLocationClassName="text-app-black"
        />

        <div className="grid gap-6 md:grid-cols-12">
          <form
            onSubmit={formik.handleSubmit}
            id="checkout-form"
            className="grid gap-6 md:col-span-6 lg:col-span-7 xl:col-span-8"
          >
            <PersonalDetails formik={formik} />
            <DeliveryDetails formik={formik} />
            <PaymentMethod setProvider={setProvider} provider={provider} />
          </form>
          <div className="md:col-span-6 lg:col-span-5 xl:col-span-4">
            <CartSummary isPending={mutation.isPending} />
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
        <Heading>Personal Details</Heading>
      </div>
      <div className="@container py-4 grid gap-3">
        <div>
          <Input
            placeholder="Your Full Name"
            formik={formik}
            name="name"
            className="bg-app-ash-1"
          />
        </div>

        <div className="grid w-full gap-3 @md:grid-cols-2">
          <Input
            placeholder="Your Email"
            formik={formik}
            name="email"
            className="bg-app-ash-1"
          />
          <Input
            placeholder="Your Phone"
            formik={formik}
            name="phone"
            className="bg-app-ash-1"
          />
        </div>
      </div>
    </div>
  );
};

const DeliveryDetails = ({ className, formik }) => {
  return (
    <div className={cn("bg-white rounded-xl p-5", className)}>
      <div className="flex items-center gap-3 border-b-2 pb-4">
        <p className="bg-app-ash-1 w-8 aspect-square rounded-full grid place-items-center font-bold">
          2
        </p>
        <Heading>Delivery Details</Heading>
      </div>
      <div className="@container py-4 grid gap-3">
        <div className="grid gap-3 grid-cols-12">
          <div className="col-span-12 @sm:col-span-8">
            <Input
              type="text"
              placeholder="Address"
              formik={formik}
              name="address"
              className="bg-app-ash-1"
            />
          </div>
          <div className="col-span-12 @sm:col-span-4">
            <Input
              type="text"
              placeholder="City"
              formik={formik}
              name="city"
              className="bg-app-ash-1"
            />
          </div>
        </div>

        <div className="grid gap-3 grid-cols-12">
          <div className="col-span-12 @sm:col-span-6">
            <Input
              type="text"
              placeholder="State"
              formik={formik}
              name="state"
              className="bg-app-ash-1"
            />
          </div>
          <div className="col-span-12 @sm:col-span-6">
            <Input
              type="text"
              placeholder="Country"
              formik={formik}
              name="country"
              className="bg-app-ash-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const PaymentMethod = ({ className, setProvider, provider }) => {
  const [paymentMethod, setPaymentMethod] = useState("online");

  return (
    <div className={cn("bg-white rounded-xl p-5", className)}>
      <div className="flex items-center gap-3 border-b-2 pb-4">
        <p className="bg-app-ash-1 w-8 aspect-square rounded-full grid place-items-center font-bold">
          3
        </p>
        <Heading>Payment Method</Heading>
      </div>
      <div className="flex items-center py-4 gap-3">
        <div className="inline-flex items-center gap-2">
          <div
            className={`relative w-5 h-5 rounded-full border-[2px] border-current before:inset-[1px] before:rounded-full before:absolute ${
              paymentMethod === "online"
                ? "before:bg-current"
                : "before:bg-transparent"
            }`}
          />
          <button type="button" onClick={() => setPaymentMethod("online")}>
            Online
          </button>
        </div>
        {/* <div className="inline-flex items-center gap-2">
          <div
            className={`relative w-5 h-5 rounded-full border-[2px] border-current before:inset-[1px] before:rounded-full before:absolute ${
              paymentMethod === "payOnDelivery"
                ? "before:bg-current"
                : "before:bg-transparent"
            }`}
          />
          <button
            type="button"
            onClick={() => setPaymentMethod("payOnDelivery")}
          >
            Pay On Delivery
          </button>
        </div> */}
      </div>

      {paymentMethod === "online" ? (
        <div>
          <div
            className={`w-full text-left p-2 ${
              provider === "flutterwave" ? "bg-app-ash-1" : ""
            }`}
          >
            <button
              type="button"
              onClick={() => setProvider("flutterwave")}
              className="w-full text-left"
            >
              Flutterwave
            </button>
          </div>
          <div
            className={`w-full text-left p-2 ${
              provider === "paystack" ? "bg-app-ash-1" : ""
            }`}
          >
            <button
              type="button"
              onClick={() => setProvider("paystack")}
              className="w-full text-left"
            >
              Paystack
            </button>
          </div>
        </div>
      ) :  null}
    </div>
  );
};

const CartSummary = ({ className, isPending }) => {
  const { data } = useCartQuery();

  return (
    <div className={cn("bg-white rounded-xl p-5", className)}>
      <div className="flex items-center gap-3 border-b-2 pb-4">
        <Heading className="text-app-black">Item(s)</Heading>
      </div>
      <div>
        <CartItems />
        <OrderSummary />

        {!data?.items || data.items.length === 0 ? null : (
          <Button
            type="submit"
            form="checkout-form"
            className="bg-black text-white font-bold w-full mt-6"
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

// import { useState, useEffect } from "react";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import { useMutation } from "@tanstack/react-query";
// import axios from "../utils/axios";
// import { Button } from "../components/ui/Button";
// import { Navigation } from "../components/ui/Navigation";
// import { Wrapper } from "../components/ui/Wrapper";
// import { useCartQuery } from "../hooks/query/useCart";
// import { Seo } from "../components/Seo";
// import { Heading } from "../components/Heading";
// import { OrderSummary } from "../components/OrderTotal";
// import { CartItems } from "../components/Cart";
// import { cn } from "../utils/cn";
// import { useAuth } from "../hooks/utils/useAuth";
// import { Icon } from "@iconify/react";
// import { Input } from "../components/Input";

// export const Component = () => {
//   const schema = yup.object().shape({
//     email: yup.string().email().required(),
//     phone: yup.string().required(),
//     city: yup.string().required(),
//     state: yup.string().required(),
//     country: yup.string().required(),
//     name: yup.string().required(),
//     address: yup.string().required(),
//   });

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       address: "",
//       email: "",
//       phone: "",
//       city: "",
//       state: "",
//       country: "",
//     },
//     validationSchema: schema,
//     onSubmit: async (values) => {
//       if (isAccepted) {
//         mutation.mutate(values);
//       } else {
//         handleModalOpen();
//       }
//     },
//   });

//   const [provider, setProvider] = useState("paystack");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isAccepted, setIsAccepted] = useState(false);

//   const handleModalOpen = () => setIsModalOpen(true);
//   const handleModalClose = () => setIsModalOpen(false);
//   const handleAccept = () => {
//     setIsAccepted(true);
//     setIsModalOpen(false);
//     formik.handleSubmit();
//   };

//   const { getUserId } = useAuth();
//   const mutation = useMutation({
//     mutationFn: (payload) => {
//       return axios.post(`create/order/${getUserId()}`, {
//         provider,
//         ...payload,
//       });
//     },
//     onSuccess: (res) => {
//       window.location.href = res.data.paymentLink;
//     },
//   });

//   useEffect(() => {
//     axios.get(`/get/user/${getUserId()}`).then((res) => {
//       formik.setValues({
//         email: res.data.user.email,
//         phone: res.data.user.phoneNumber,
//         address: res.data.user.address,
//         name: formik.values.name,
//         city: formik.values.city,
//         state: formik.values.state,
//         country: formik.values.country,
//       });
//     });
//   }, []);

//   return (
//     <main>
//       <Seo
//         title="Mhkasa | Checkout"
//         description="Complete Transaction"
//         type="webapp"
//         name=""
//       />

//       <Wrapper className="py-4">
//         <Navigation
//           location={[
//             { description: "Home", to: "/", title: "Go to Home Page" },
//             { description: "Cart", to: "/cart" },
//             { description: "Checkout", to: "" },
//           ]}
//           className="text-[#3338] py-4"
//           iconClassName="text-[#3339] text-2xl"
//           currentLocationClassName="text-app-black"
//         />

//         <div className="grid gap-6 md:grid-cols-12">
//           <form
//             onSubmit={formik.handleSubmit}
//             id="checkout-form"
//             className="grid gap-6 md:col-span-6 lg:col-span-7 xl:col-span-8"
//           >
//             <PersonalDetails formik={formik} />
//             <DeliveryDetails formik={formik} />
//             <PaymentMethod setProvider={setProvider} provider={provider} />
//           </form>
//           <div className="md:col-span-6 lg:col-span-5 xl:col-span-4">
//             <CartSummary isPending={mutation.isPending} onPayNow={handleModalOpen} />
//           </div>
//         </div>
//       </Wrapper>

//       <DeliveryAgreementModal
//         isOpen={isModalOpen}
//         onClose={handleModalClose}
//         onAccept={handleAccept}
//       />
//     </main>
//   );
// };

// const PersonalDetails = ({ className, formik }) => {
//   return (
//     <div className={cn("bg-white rounded-xl p-5", className)}>
//       <div className="flex items-center gap-3 border-b-2 pb-4">
//         <p className="bg-app-ash-1 w-8 aspect-square rounded-full grid place-items-center font-bold">
//           1
//         </p>
//         <Heading>Personal Details</Heading>
//       </div>
//       <div className="@container py-4 grid gap-3">
//         <div>
//           <Input
//             placeholder="Your Full Name"
//             formik={formik}
//             name="name"
//             className="bg-app-ash-1"
//           />
//         </div>

//         <div className="grid w-full gap-3 @md:grid-cols-2">
//           <Input
//             placeholder="Your Email"
//             formik={formik}
//             name="email"
//             className="bg-app-ash-1"
//           />
//           <Input
//             placeholder="Your Phone"
//             formik={formik}
//             name="phone"
//             className="bg-app-ash-1"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// const DeliveryDetails = ({ className, formik }) => {
//   return (
//     <div className={cn("bg-white rounded-xl p-5", className)}>
//       <div className="flex items-center gap-3 border-b-2 pb-4">
//         <p className="bg-app-ash-1 w-8 aspect-square rounded-full grid place-items-center font-bold">
//           2
//         </p>
//         <Heading>Delivery Details</Heading>
//       </div>
//       <div className="@container py-4 grid gap-3">
//         <div className="grid gap-3 grid-cols-12">
//           <div className="col-span-12 @sm:col-span-8">
//             <Input
//               type="text"
//               placeholder="Address"
//               formik={formik}
//               name="address"
//               className="bg-app-ash-1"
//             />
//           </div>
//           <div className="col-span-12 @sm:col-span-4">
//             <Input
//               type="text"
//               placeholder="City"
//               formik={formik}
//               name="city"
//               className="bg-app-ash-1"
//             />
//           </div>
//         </div>

//         <div className="grid gap-3 grid-cols-12">
//           <div className="col-span-12 @sm:col-span-6">
//             <Input
//               type="text"
//               placeholder="State"
//               formik={formik}
//               name="state"
//               className="bg-app-ash-1"
//             />
//           </div>
//           <div className="col-span-12 @sm:col-span-6">
//             <Input
//               type="text"
//               placeholder="Country"
//               formik={formik}
//               name="country"
//               className="bg-app-ash-1"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const PaymentMethod = ({ className, setProvider, provider }) => {
//   const [paymentMethod, setPaymentMethod] = useState("online");

//   return (
//     <div className={cn("bg-white rounded-xl p-5", className)}>
//       <div className="flex items-center gap-3 border-b-2 pb-4">
//         <p className="bg-app-ash-1 w-8 aspect-square rounded-full grid place-items-center font-bold">
//           3
//         </p>
//         <Heading>Payment Method</Heading>
//       </div>
//       <div className="flex items-center py-4 gap-3">
//         <div className="inline-flex items-center gap-2">
//           <div
//             className={`relative w-5 h-5 rounded-full border-[2px] border-current before:inset-[1px] before:rounded-full before:absolute ${
//               paymentMethod === "online"
//                 ? "before:bg-current"
//                 : "before:bg-transparent"
//             }`}
//           />
//           <button type="button" onClick={() => setPaymentMethod("online")}>
//             Online
//           </button>
//         </div>
//         {/* <div className="inline-flex items-center gap-2">
//           <div
//             className={`relative w-5 h-5 rounded-full border-[2px] border-current before:inset-[1px] before:rounded-full before:absolute ${
//               paymentMethod === "payOnDelivery"
//                 ? "before:bg-current"
//                 : "before:bg-transparent"
//             }`}
//           />
//           <button
//             type="button"
//             onClick={() => setPaymentMethod("payOnDelivery")}
//           >
//             Pay On Delivery
//           </button>
//         </div> */}
//       </div>

//       {paymentMethod === "online" ? (
//         <div>
//           <div
//             className={`relative w-5 h-5 rounded-full border-[2px] border-current before:inset-[1px] before:rounded-full before:absolute ${
//               provider === "paystack"
//                 ? "before:bg-current"
//                 : "before:bg-transparent"
//             }`}
//           />
//           <button type="button" onClick={() => setProvider("paystack")}>
//             Paystack
//           </button>
//         </div>
//       ) : null}
//     </div>
//   );
// };

// const CartSummary = ({ className, isPending, onPayNow }) => {
//   const { data } = useCartQuery();

//   return (
//     <div className={cn("bg-white rounded-xl p-5", className)}>
//       <div className="flex items-center gap-3 border-b-2 pb-4">
//         <Heading className="text-app-black">Item(s)</Heading>
//       </div>
//       <div>
//         <CartItems />
//         <OrderSummary />

//         {!data?.items || data.items.length === 0 ? null : (
//           <Button
//             type="button"
//             onClick={onPayNow}
//             className="bg-black text-white font-bold w-full mt-6"
//           >
//             {isPending ? (
//               <Icon
//                 icon="svg-spinners:6-dots-rotate"
//                 style={{ fontSize: 20 }}
//                 className="text-center"
//               />
//             ) : (
//               "Pay Now"
//             )}
//           </Button>
//         )}
//       </div>
//     </div>
//   );
// };

// const DeliveryAgreementModal = ({ isOpen, onClose, onAccept }) => {
//   if (!isOpen) return null;
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white rounded-lg p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto">
//         <h2 className="text-base font-bold mb-4">Delivery Agreement</h2>
//         <p className="mb-2">
//           Business days are from Monday to Saturday.
//           <br />
//           We value every order by our esteemed customers and we’re very grateful for the business opportunity offered us. Thank you! Swift and safe delivery of your goods is way too important to us because it brings better customer appraisal on our end and most importantly satisfaction to our customers. We value every single customer that's why we trust our deliveries to our carefully selected courier. It's also why we ask that your order be signed for, if you cannot be there then please let us know if you have an alternative i.e. colleague, neighbor etc.
//           <br />
//           Kindly note that Sundays and public holidays are not included as deliveries might be affected by these.
//           <br />
//           Orders below ₦100,000: Delivery costs ₦2,500.00 within Lagos. Order Arrival is 2 days max within Lagos and 5 days max outside Lagos. Kindly note that customers may be required on some occasions to pick up their package from a designated office address. Orders placed after 4pm will begin processing the next business day.
//           <br />
//           Orders Above ₦100,000: Delivery is free within Lagos. Order Arrival is 2 days max within Lagos and 5 days max outside Lagos. Kindly note that customers may be required in some occasions to pick up their package from a designated office address. Orders placed after 4pm will begin processing the next business day.
//           <br />
//           IMPORTANT INFORMATION: Mkhasa is not responsible for any damages caused after delivery. Mkhasa bears no responsibility for goods signed by an alternative person. All claims for shortages or damages must be reported to customer service on the day of delivery. We are unable to redirect orders once items have been shipped. If you have any further queries regarding Mkhasa delivery, please contact our Support Team at support@mkhasa.com from Monday to Saturday 9.00am - 8.00pm.
//         </p>
//         <div className="flex justify-end gap-4">
//           <Button onClick={onClose} className="bg-red-500 text-white">Cancel</Button>
//           <Button onClick={onAccept} className="bg-green-500 text-white">Accept</Button>
//         </div>
//       </div>
//     </div>
//   );
// };