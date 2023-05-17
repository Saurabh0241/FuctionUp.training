import NavbarStyleBackground from './Navbar-Container.module.css';
import Navbar from '../Oraganism/Navbar';

export function NavbarContainer() {
    return (
        <>
            <div className={NavbarStyleBackground.main_container}>
                <NavabarContents />
            </div>
        </>
    )
}