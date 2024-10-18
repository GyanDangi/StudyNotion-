import React from "react";
import ContactUsForm from "../../Common/ContactUsForm";

const GetInTouchForm = () => {
  return (
    <div className="w-11/12 max-w-maxContent mt-10 mb-10 gap-4 text-white items-center flex flex-col mx-auto ">
      <div className="flex flex-col gap-2 items-center">
        <h1>Get in Touch</h1>
        <p className="text-[#838894]">
          We’d love to here for you, Please fill out this form.
        </p>
      </div>
      <div>
        <ContactUsForm />
      </div>
    </div>
  );
};

export default GetInTouchForm;
