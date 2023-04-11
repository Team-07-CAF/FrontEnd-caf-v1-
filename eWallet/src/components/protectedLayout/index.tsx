import { useAuth } from "../../context/authProvider/useAuth"

export const ProtectedLayout = ({children}: {children: JSX.Element}) => {
    const auth = useAuth();

    if (!auth.email) {
        return <h2>You don´t have access</h2>;
    }

    return children;
};