import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";

function DashboardHelp() {
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  return (
    <>
      <section className="mb-3 py-3">
        <div className="mb-2 w-100">
          <Toast show={showA} onClose={toggleShowA} className="w-100">
            <div className="toast-header">
              <h6 className="fw-bold me-auto">Onboarding Help</h6>
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="toast"
                onClick={toggleShowA}
                aria-label="Close"
              ></button>
            </div>

            <div className="toast-body">
              <p>Welcome to the Contractor site</p>
              <p>
                Here is a quick guide of how to navigate the site and what you
                will find.
              </p>
            </div>
          </Toast>
        </div>
      </section>
    </>
  );
}

export default DashboardHelp;
