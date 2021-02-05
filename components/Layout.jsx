import HeaderNavBar from "./NavBar"

const Layout = (props) => {
    return(
        <div >
            <HeaderNavBar />
            {/* <div style={{backgroundColor: 'grey'}} > */}
                {props.children}
            {/* </div> */}
        </div>
    )
}

export default Layout;