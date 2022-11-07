import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
        <>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="sidebar_menu" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Trackr</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="nav flex-column mb-sm-auto mb-0 align-items-start">
                        <li>
                            <Link to="/" className="nav-link text-truncate">
                                <i className="fs-5 bi-speedometer2"></i><span className="ms-2 d-none d-sm-inline">Dashboard</span> </Link>
                        </li>
                        <li >
                            <Link to="/assets" className="nav-link text-truncate">
                                <i className="fs-5 bi-upc-scan"></i><span className="ms-2 d-none d-sm-inline">Assets</span></Link>
                        </li>
                        <li >
                            <Link to="/accessories" className="nav-link text-truncate">
                                <i className="fs-5 bi-controller"></i><span className="ms-2 d-none d-sm-inline">Accessories</span></Link>
                        </li>
                        <li >
                            <Link to="/consumables" className="nav-link text-truncate">
                                <i className="fs-5 bi-cup-hot"></i><span className="ms-2 d-none d-sm-inline">Consumables</span></Link>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="nav-link dropdown-toggle  text-truncate" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fs-5 bi-gear"></i><span className="ms-2 d-none d-sm-inline">Settings</span>
                            </a>
                            <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdown">
                                <li><a className="dropdown-item" href="#">New project...</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </li>   
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideBar