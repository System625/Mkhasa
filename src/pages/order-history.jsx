// import { Icon } from "@iconify/react";
import { Heading } from "../components/Heading";
import { Wrapper } from "../components/ui/Wrapper";
import { Navigation } from "../components/ui/Navigation";
import { Seo } from "../components/Seo";
import axios from "../utils/axios";
import { useAuth } from "../hooks/utils/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Virtuoso } from "react-virtuoso";

export const Component = () => {
  const { getUserId } = useAuth();
  const fetchOrders = async () => {
    const res = await axios.get(`all/order/${getUserId()}`);
    return res.data;
  };

  const { data, status } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
  });

  return (
    <>
      <Seo
        title="Mkhasa | Order History"
        type="webapp"
        description="Experience smooth shopping"
        name=""
      />
      <Wrapper className="py-4">
        {/* <Navigation
          location={[
            { description: "Home", to: "/", title: "Go to Home Page" },
            { description: "My Account", to: "/account" },
            { description: "Order History", to: "" },
          ]}
          className="text-[#3338] py-4"
          iconClassName="text-[#3339] text-2xl"
          currentLocationClassName="text-app-black"
        /> */}
        <Heading>Order History</Heading>

        <div className="@container bg-white py-6 px-4 rounded-3xl my-4 md:px-8    font-Helvetica">
          <div className="grid font-bold border-b-2 pb-4 grid-cols-6">
            <p className="text-nowrap col-span-3 @md:col-span-2">Order No.</p>
            <p className="hidden text-center col-span-2 @md:block">City</p>
            <p className="col-span-3 text-right @md:col-span-2">Status</p>
          </div>
          <ul className="py-2">
            {status === "pending" ? (
              <div>Loading ...</div>
            ) : status === "error" ? (
              <p>Error occured</p>
            ) : (
              <Virtuoso
                style={{ minHeight: "400px", height: 400 }}
                data={data?.orders || []}
                itemContent={(_, order) => (
                  <Order
                    id={order.code}
                    date={order.city}
                    status={order.status}
                  />
                )}
              />
            )}
          </ul>
        </div>
      </Wrapper>
    </>
  );
};

const Order = ({ id, date, status }) => {
  return (
    <li className="grid grid-cols-6 py-2">
      <p className="col-span-3 @md:col-span-2">{id}</p>
      <p className="hidden text-center col-span-2 @md:block">{date}</p>
      <p className={`col-span-3 text-right rounded-full py-1 px-4 ${status ==="pending"?"bg-red-800 text-white":status==="dispatched" ? "bg-yellow-500":status==="delivered"?"bg-green-500":""} ml-auto w-fit @md:col-span-2`}>
      {status}
      </p>
    </li>
  );
};
