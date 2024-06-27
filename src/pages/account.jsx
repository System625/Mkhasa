import { Icon } from "@iconify/react";
import { Heading } from "../components/Heading";
import { Wrapper } from "../components/ui/Wrapper";
import { Link } from "react-router-dom";
import { Navigation } from "../components/ui/Navigation";
import { Seo } from "../components/Seo";
import { Logout } from "../components/Logout";
import { useAuth } from "../hooks/utils/useAuth";
import { useEffect, useState } from "react";
import axios from "../utils/axios";

export const Component = () => {
  const { getUserEmail,getUserId } = useAuth();
 const [orderdata,setOrderData]=useState({})
  useEffect(()=>{
    axios.get(`/count/user/orders/${getUserId()}`).then((res)=>{

      setOrderData(res.data)
    }).catch((err)=>{
    // console.log(err)
    })

  },[])
  return (
    <>
      <Seo
        title="Mkhasa | My Account"
        type="webapp"
        description="Experience smooth shopping"
        name=""
      />
      <Wrapper className="py-4">
        <Navigation
          location={[
            { description: "Home", to: "/", title: "Go to Home Page" },
            { description: "My Account", to: "" },
          ]}
          className="text-[#3338] py-4"
          iconClassName="text-[#3339] text-2xl"
          currentLocationClassName="text-app-black"
        />
        <div className="flex justify-between gap-8 items-center py-4">
          <Heading className="text-app-black">Hi {getUserEmail()}</Heading>
          <Logout
            className="w-fit bg-transparent text-nowrap font-medium text-app-black hover:text-app-red"
            toggle={() => {}}
          />
        </div>

        <p>
          Welcome to your account, you can manage your orders and profile
          details.
        </p>

        <div className="grid gap-6 py-6 md:grid-cols-2">
          <Link to="/account/order-history">
            <div className="bg-white rounded-xl flex items-center gap-4 px-4 py-2">
              <Icon
                icon="system-uicons:box"
                style={{ fontSize: 132 }}
                className="text-app-red"
              />
              <div>
                <Heading>ORDERS</Heading>
                <div className="flex items-center gap-x-4 gap-y-2 flex-wrap pt-2">
                  <p className="p-1 rounded-md text-sm text-nowrap text-red-500 font-bold bg-yellow-50">
                    {orderdata?.pending||0} Pending
                  </p>
                  <p className="p-1 rounded-md text-sm text-nowrap text-yellow-500 font-bold bg-green-50">
                    {orderdata?.dispatched||0} Dispacthed
                  </p>
                  <p className="p-1 rounded-md text-sm text-nowrap text-green-500 font-bold bg-green-50">
                    {orderdata?.delivered||0} Delivered
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/account/profile">
            <div className="bg-white rounded-xl flex items-center gap-4 px-4 py-2">
              <Icon
                icon="mingcute:user-1-line"
                style={{ fontSize: 132 }}
                className="text-app-red"
              />
              <div>
                <Heading>Profile</Heading>
                <p>Manage your Profile and Password</p>
              </div>
            </div>
          </Link>
        </div>
      </Wrapper>
    </>
  );
};
