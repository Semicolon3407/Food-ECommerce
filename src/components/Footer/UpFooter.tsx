import { FiPhoneCall } from "react-icons/fi";
import { LiaGiftSolid, LiaMoneyBillWaveSolid, LiaShippingFastSolid } from "react-icons/lia";
import UpFooterCard from "./UpFooterCard";

const data = [
    { 
        title: "Free Shipping", 
        icon: <LiaShippingFastSolid /> 
    },
    { 
        title: "Best Price Guarantee", 
        icon: <LiaMoneyBillWaveSolid /> 
    },
    { 
        title: "Free Curbside Pickup", 
        icon: <LiaGiftSolid /> 
    },
    { 
        title: "Support 24/7", 
        icon: <FiPhoneCall /> 
    },
];

const UpFooter = () => {
  return(

      <>
      <div className="container pt-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {data.map((el) => (
                <UpFooterCard key={el.title} title={el.title} icon={el.icon}/>
            ))}
        </div>
      </div>
  </>
    ); 
};

export default UpFooter;
