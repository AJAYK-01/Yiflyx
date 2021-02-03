import React, { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse
} from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import { useRouter } from "next/router";

export default function HeaderNavBar() {

    const [searchTerm, setTerm] = useState('');
    const router = useRouter();

    const search = (e) => {
        e.preventDefault();
        if(searchTerm !== '')
            router.push('/search/'+searchTerm);
    }

    return (
      <Navbar type="dark" expand="md" >
        <NavbarBrand href="/" style={{fontSize: '30px'}} >Yiflyx</NavbarBrand>

        <Nav navbar className="ml-auto">
        <form onSubmit={search} >
        <InputGroup size="sm" seamless>
            <InputGroupAddon type="prepend">
            <InputGroupText>
                <FontAwesomeIcon icon={faSearch} />
            </InputGroupText>
            </InputGroupAddon>
                <FormInput className="border-0" placeholder="Search..." value={searchTerm} 
                onChange={(e) => setTerm(e.target.value)} />
        </InputGroup>
        </form>
        </Nav>
      </Navbar>
    );
}