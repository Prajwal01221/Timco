import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex-center-spacebetween">
        <div>
            Timco
        </div>
        <div className="flex-center-evenly" style={{width : '20rem'}}>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <div>
                    Home
                </div>
            </Link>
            <Link to='/services' style={{ textDecoration: 'none' }}>
                <div>
                    Services
                </div>
            </Link>
            <div>
                Direct Purchase
            </div>
            <div>
                Blog
            </div>
        </div>
        <div>
            Login
        </div>
    </div>
)
}
