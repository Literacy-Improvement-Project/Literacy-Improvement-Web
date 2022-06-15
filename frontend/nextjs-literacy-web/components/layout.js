import Nav from "./organism/Nav/Nav";
import LoginCheck from "./organism/page-login/LoginCheck";

export default function Layout({ children }) {

    return (
        <>
            <Nav>
            </Nav>
            <LoginCheck></LoginCheck>
            <main>{children}</main>
        </>
    )
}

