import React from "react";
import { BounceLoader } from "react-spinners"; // Import BounceLoader from react-spinners

const Loader = () => (
  <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center flex-col bg-black bg-opacity-50 z-50">
    {/* Adding the BounceLoader component with a message */}
    <div className="mt-5">
      <BounceLoader color="#CBFE47" size={100} />
    </div>
  </div>
);

export default Loader;