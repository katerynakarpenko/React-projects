import HeaderLogo from "./HeaderLogo";
import CartSvg from "./svg_component/CartSvg";

const Header = () => {
  return (
    <div className="header">
      <div className="container">

        <HeaderLogo />

        <div className="header__cart">
          <a href="/cart.html" className="button button--cart">
            <span>$5.20</span>
            <div className="button__delimiter"></div>
            <CartSvg />
            <span>3</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header;