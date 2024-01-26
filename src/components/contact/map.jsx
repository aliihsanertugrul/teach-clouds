import { config } from "@/helpers/config";
import React from "react";

const Map = () => {
  return (
    <iframe
      src={config.contact.mapEmbedURL}
      width="100%"
      height="550"
      style={{ border: "0" }}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default Map;
