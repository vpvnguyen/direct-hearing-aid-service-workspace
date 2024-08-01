import React from "react";

const GoogleMapsEmbed = (props) => {
  return (
    <iframe
      title="googlemaps-embed"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6632.195907048701!2d-117.94343398797754!3d33.78396857314763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd2811dd27eea5%3A0xe34848147600b8d3!2s12312%20S%20Euclid%20St%2C%20Garden%20Grove%2C%20CA%2092840!5e0!3m2!1sen!2sus!4v1721197767356!5m2!1sen!2sus"
      width={600}
      height={450}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      {...props}
    ></iframe>
  );
};

export default GoogleMapsEmbed;
