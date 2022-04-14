import Nav from "./organism/Nav/Nav";

export default function Layout({ children }) {
    return (
        <>
            <Nav>
            </Nav>
            <main>{children}</main>

        </>
    )
}