import logo from '../assets/header_logo.jpeg'
const Header = ()=>{
    return(
        <div className="header">
            <img src={logo} alt="Logo" className="logo"/>
            <h1 className="name">Chef Claude</h1>
        </div>
    );
}

export default Header;