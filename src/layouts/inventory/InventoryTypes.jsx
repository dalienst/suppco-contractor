import React from 'react'
import { publicLinks } from '../../constants/links';
import { Link } from 'react-router-dom';
import { shell } from '../../data/inventory/shellEquipmentData';

function InventoryTypes() {
  return (
    <>
      <section>
        <div className="row">
          <div className="col-md-6 col-sm-12 mb-3">
            <div className="card">
              <div className="card-header">Site Equipment</div>
              <div className="card-body">
                <p className="card-text">The Site Equipment</p>
              </div>
              <div className="card-footer">
                <Link
                  to={publicLinks?.SiteEquipment}
                  className="btn btn-primary btn-sm"
                >
                  Details <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 mb-3">
            <div className="card">
              <div className="card-header">Shell Equipment</div>
              <div className="card-body">
                <div className="list-group">
                  {shell.slice(0, 5).map((shell) => (
                    <>
                      <li className="list-group-item">{shell?.category}</li>
                    </>
                  ))}
                </div>
              </div>
              <div className="card-footer">
                <Link
                  to={publicLinks?.ShellEquipment}
                  className="btn btn-primary btn-sm"
                >
                  Details <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 mb-3">
            <div className="card">
              <div className="card-header">Builder's Plant</div>
              <div className="card-body">
                <p className="card-text">Builder's Plant</p>
              </div>
              <div className="card-footer">
                <Link
                  to={publicLinks?.BuildersPlant}
                  className="btn btn-primary btn-sm"
                >
                  Details <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 mb-3">
            <div className="card">
              <div className="card-header">Plumbing & Electricity</div>
              <div className="card-body">
                <p className="card-text">Plumbing & Electricity</p>
              </div>
              <div className="card-footer">
                <Link
                  to={publicLinks?.PlumbingElectricity}
                  className="btn btn-primary btn-sm"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default InventoryTypes