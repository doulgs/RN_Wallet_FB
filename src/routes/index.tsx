import React, { useState } from "react";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const Routes: React.FC = () => {
    const [user, setUser] = useState(false);

    return user ? <AuthRoutes /> : <AppRoutes />;
};

export default Routes;
