import Admin from "./pages/Admin";
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  REGISTRY_ROUTE,
  CATEGORIZED_ROUTE
} from "./utils/consts";
import CatObj from "./pages/CatObj";
import Auth from "./pages/Auth";
import Registry from "./pages/Registry";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: REGISTRY_ROUTE,
    Component: Registry,
  },
  {
    path: CATEGORIZED_ROUTE,
    Component: CatObj,
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
];
