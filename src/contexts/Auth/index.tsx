import { createContext, useEffect, useState } from "react";

import { AuthType, TokenType, UserDataType } from "../../types";

export const AuthContext = createContext<AuthType>({} as AuthType);

export const AuthProvaider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [globalLoading, setGlobalLoading] = useState(false);

    const [userData, setUserData] = useState<UserDataType>();
    const [token, setToken] = useState<TokenType>();

    useEffect(() => {
        AuthVerify();
    }, []);

    const AuthVerify = () => {};

    const Login = () => {};
    const LogOut = () => {};

    return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
