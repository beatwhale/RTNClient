import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { LOGIN_ROUTE } from "../utils/consts";

const AppRouter = observer(() => {
  const { user } = useContext(Context);
  console.log(user);
  return (
    <Routes>   
      <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
      
    </Routes>
  );
});

export default AppRouter;
