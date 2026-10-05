import { Link } from "react-router-dom";

export const NavbarBrand = ({ light = false }: { light?: boolean }) => (
    <Link to="/" className="flex shrink-0 items-center" aria-label="ENERSI">
        <img src={light ? "/brand/logo-white.png" : "/brand/logo.png"} alt="ENERSI" width={136} height={40} className="h-8 w-auto md:h-9" />
    </Link>
);
