import React from "react";
import "./Cards.css";
import CardDetails from "../Cards/CardDetails";
export const Cards = (props) => {
  function confirmAction() {
    if (
      window.confirm("Are you sure you want to register for this tournament")
    ) {
      // Save it!
      alert("Well , your registered details will be send to registered email");
    } else {
      // Do nothing!
      alert("Okayyy, may be next time");
    }
  }
  return (
    <>
      <div className="antialiased bg-gray-900 text-gray-900 font-sans p-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            {CardDetails.map((props) => (
              <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-5" key={props.id}>
                <div className="c-card block bg-gray-800 shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                  <div className="relative pb-48 overflow-hidden">
                    <img
                      className="absolute inset-0 h-full w-full object-cover"
                      src={props.Img_Url}
                      alt=""
                    />
                  </div>

                  <div className="p-4">
                    <span className=" inline-block px-2 py-1 leading-none bg-red-500 text-orange-200 rounded-full font-semibold uppercase tracking-wide text-xs">
                      On Demand
                    </span>
                    <h2 className="mt-2 mb-2  font-bold text-gray-300">
                      {props.Game_Name}
                    </h2>
                    <p className="text-sm text-gray-400 h-44">{props.Desc}</p>
                    <div className="mt-3 flex items-center text-gray-100">
                      &nbsp;{" "}
                      <span className="font-bold text-lg">Pricing :</span>{" "}
                      &nbsp;{" "}
                      <span className="font-bold text-lg">{props.Pricing}</span>
                    </div>
                  </div>
                  <div className="p-4  text-xs text-yellow-300">
                    {/* border-t border-b */}
                    <span className="flex items-center mb-1">
                      <i className="far fa-clock fa-fw mr-2 text-gray-900"></i>{" "}
                      End Date :
                      <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
                      {props.Date}
                    </span>
                  </div>
                  <button className="registerbtn" onClick={confirmAction}>
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
