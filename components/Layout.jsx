import HeaderNavBar from "./navbar"

const Layout = (props) => {
    return(
        <div >
            <HeaderNavBar />
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Layout;