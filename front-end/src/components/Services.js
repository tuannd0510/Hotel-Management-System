import React from "react";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { FaCocktail, FaBeer, FaShuttleVan, FaHiking, FaSpa, FaSwimmingPool, FaMusic } from "react-icons/fa";

export default function Services() {
  const serviceList = [
    {
      serviceName: <FaCocktail />,
      title: "Restaurant and Bar",
      details:
      "Include breakfast buffets, fine-dining, and bar services",
    },
    {
      serviceName: <FaSpa />,
      title: "Gym Center and Spa",
      details:
        "Offering gym facilities, wellness centers, and spa treatments for guests to relax",
    },
    {
      serviceName: <FaSwimmingPool />,
      title: "4-Season Pool",
      details:
      "Providing a pool area for guests to swim, sunbathe, and relax.",
    },
    {
      serviceName: <FaMusic />,
      title: "Free Hiking",
      details:
      "Hosting events, live music, and other entertainment options",
    },
  ];

  return (
    <React.Fragment>
      <Title title="Services" />
      <div className="row services align-items-center justify-content my-2">
        {serviceList.map((service, index) => 
          <ServiceCard
          service={service.serviceName}
          title={service.title}
          details={service.details}
          key={index}
        />
        )}
      </div>
    </React.Fragment>
  );
}
