import React from "react";

function PageBanner({ name }) {
  return (
    <>
      <h2 className="fw-bold py-3 mb-3 border px-2 rounded bg-dark text-white">
        {name}
      </h2>
    </>
  );
}

export default PageBanner;
