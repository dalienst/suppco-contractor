import React, { useState } from "react";
import { Link } from "react-router-dom";
import { publicLinks } from "../constants/links";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { employees } from "../data/EmployeeData";

function Employees() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    setShow(false);
    alert("Employee Added and allocated to site");
  };

  return (
    <>
      <div className="container py-2">
        <section>
          <div className="d-flex align-content-center justify-content-between mb-3">
            <div>
              <Link
                className="btn btn-outline-primary btn-sm me-2"
                to={publicLinks?.Dashboard}
              >
                <i className="bi bi-box-arrow-left"></i>
              </Link>
            </div>
            <div>
              <h2 className="fw-bold ">Employees</h2>
            </div>
            <div>
              <Button variant="outline-primary" onClick={handleShow}>
                Add Employee
              </Button>
            </div>
          </div>

          <Modal
            show={show}
            onHide={handleClose}
            dialogClassName="modal-dialog modal-dialog-scrollable"
          >
            <div className="modal-header">
              <h5 className="modal-title">Add New Employee</h5>
              <button
                className="btn-close"
                type="button"
                onClick={handleClose}
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Employee Name
                  </label>
                  <input type="text" name="name" className="form-control" />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Employee Email
                  </label>
                  <input type="email" name="email" className="form-control" />
                </div>

                <div className="mb-3">
                  <label htmlFor="contact" className="form-label">
                    Employee Contact
                  </label>
                  <input
                    type="number"
                    name="contact"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="location" className="form-label">
                    Employee Location
                  </label>
                  <input type="text" name="location" className="form-control" />
                </div>

                <div className="mb-3">
                  <label htmlFor="idnumber" className="form-label">
                    Employee Identification
                  </label>
                  <input type="text" name="idnumber" className="form-control" />
                </div>

                <div className="mb-3">
                  <label htmlFor="site" className="form-label">
                    Allocate to Site
                  </label>
                  <select name="site" id="site" className="form-select">
                    <option value="site1">Site A</option>
                    <option value="site2">Site B</option>
                    <option value="site3">Site E</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="role" className="form-label">
                    Employee Role
                  </label>
                  <select name="role" id="role" className="form-select">
                    <option value="foreman">Foreman</option>
                    <option value="secretary">Secretary</option>
                    <option value="manager">Manager</option>
                  </select>
                </div>

                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn btn-sm btn-outline-primary w-100"
                    onClick={handleSubmit}
                  >
                    Add
                  </button>
                </div>

                <div className="mb-2">
                  <Link
                    className="btn btn-primary btn-sm w-100"
                    onClick={() =>
                      alert(
                        "Registration Link Copied. Send the link to the potential employee"
                      )
                    }
                  >
                    Send Link
                  </Link>
                </div>
              </form>
            </div>
          </Modal>
          <hr />
        </section>

        <section>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Site</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <>
                    <tr>
                      <td>{employee.name}</td>
                      <td>{employee.email}</td>
                      <td>{employee.phone}</td>
                      <td>{employee.site}</td>
                      <td>{employee.position}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}

export default Employees;
