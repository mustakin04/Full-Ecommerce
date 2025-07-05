import React from "react";
import Container from "./Container";
import Card from "../Layout/Card";
import NewArrival1 from "../assets/NewAerrival1.png";
import NewArrival2 from "../assets/NewAerrival2.png";
import NewArrival3 from "../assets/NewAerrival3.png";
import NewArrival4 from "../assets/NewAerrival4.png";

const NewArrival = () => {
  return (
    <div className="py-[75px]">
      <Container>
        <Card tittle="Featured"></Card>
        <div>
          <h3 className="font-Inter font-semibold text-[36px] text-black mt-[20px]">
            New Arrival
          </h3>
        </div>
        <div className="flex justify-between mt-[40px]">
          <div>
            <img src={NewArrival1} alt="" />
          </div>
          <div className="">
            <div>
              <img src={NewArrival2} alt="" />
            </div>
            <div className="flex justify-between mt-[30px]">
              <img src={NewArrival3} alt="" />
              <img src={NewArrival4} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewArrival;
