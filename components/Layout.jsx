import HeaderNavBar from "./NavBar"

import WaitForReact from '@moxy/react-wait-for-react';
import { useMemo } from "react";

const preloadAssets = async () => {
    // Preload files, like a mp3, 3d objects, etc..
};

const Layout = (props) => {

    const promise = useMemo(() => preloadAssets(), []);
    const applyProgressBeforeInteractive = `function (elements, progress) {
        elements.progressBar.style.transform = 'scaleX(' + progress + ')';
    }`;

    return(
        <div >
            <WaitForReact
                applyProgressBeforeInteractive={ applyProgressBeforeInteractive }
                    promise={ promise }>
                    { ({ progress }) => (
                        <div
                            data-wait-for-react-element="progressBar"
                            // className={ classNames(styles.progressBar, progress > 1 && styles.done) }
                            style={ { transform: `scaleX(${progress})` } } />
                    ) }
            </WaitForReact>
            <HeaderNavBar />
                
            {props.children}

        </div>
    )
}

export default Layout;