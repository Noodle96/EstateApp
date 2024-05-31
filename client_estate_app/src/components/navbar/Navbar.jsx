import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
        <div className="left">
          <a href="/" className="logo">
            <img src="/logo.png" alt="logo" />
            <span>CachinaPE</span>
          </a>
          <a href="">Tienda</a>
          <a href="">Vender</a>
          <a href="">Categorias</a>
          <a href="">Sostenibilidad</a>
        </div>
        <div className="right">
          <a href="/">Sig In</a>
          <a href="/" className="register">Sign Up</a>
          <div className="menuIcon">
            <img
              src="/menu.png"
              alt="menu"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className={open ? "menu active": "menu"}>
            <a href="">Tienda</a>
            <a href="">Vender</a>
            <a href="">Categorias</a>
            <a href="">Sostenibilidad</a>
            <a href="">Sign in</a>
            <a href="">Sign up</a>
          </div>
        </div>
    </nav>
  )
}

export default Navbar