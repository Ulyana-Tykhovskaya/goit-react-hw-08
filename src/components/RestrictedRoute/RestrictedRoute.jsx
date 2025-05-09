import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function RestrictedRoute({ component: Component }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return isLoggedIn ? <Navigate to="/contacts" /> : <Component />;
}
