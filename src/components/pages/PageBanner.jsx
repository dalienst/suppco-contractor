import React from "react";

function PageBanner({ name }) {
  return (
    <>
      <h2 className="fw-bold py-3 mb-3 border px-2 rounded bg-primary text-white shadow">
        {name}
      </h2>
    </>
  );
}

export default PageBanner;
