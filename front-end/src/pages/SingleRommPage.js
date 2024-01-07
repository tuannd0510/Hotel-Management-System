import React, { useContext } from "react";
import { MyContext } from "../Context";
import Title from "../components/Title";
import BannerComponent from "../components/BannerComponent";

export default function SingleRommPage({ match }) {
  const context = useContext(MyContext);
  const room = context.rooms.find(
    (room) => room.room_slug === match.params["room_slug"]
  );
  if (!room) {
    return <div>Eroror</div>;
  } else {
    return (
      <>
        <BannerComponent room={room} />
        <div className="container my-5 align-items-center justify-content">
          <Title title="Description" />

          <div className="row">
            {/* <div className="col-md-6 m-auto">
              <h6>Details</h6>
              <p className="text-justify" style={{ width: "80%" }}>
                
              </p>
            </div> */}
            <div className="col-md-6 m-auto">
              <h6>Information</h6>
              <p>Price ${room.price_per_night}</p>
              <p>Size {room.room_size} Sqr Feet</p>
              <p>Capacity Maxium {room.capacity} People</p>
              <p>Meals Included</p>
            </div>
          </div>

          {/* <Title title="Facilities" />

          <div className="row mt-5">
            <div className="col-md-4">
              
            </div>
            <div className="col-md-4">
              
            </div>
            <div className="col-md-4">
              
            </div>
          </div> */}
        </div>
      </>
    );
  }
}
