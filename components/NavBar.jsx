import React, { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar,
  NavbarBrand,
  Nav,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
} from "shards-react";

import { useRouter } from "next/router";

export default function HeaderNavBar() {

    const [searchTerm, setTerm] = useState('');
    const router = useRouter();

    const search = (e) => {
        e.preventDefault();
        if(searchTerm !== '')
            router.push('/search/'+searchTerm);
    }

    const topbar = {
      display: 'flex',
      justifyContent: 'space-around'
    }

    const searchContainer = {
      width: '1100px',
      maxWidth: '90%', 
      display: 'flex', 
      justifyContent: 'space-around'
    }

    const searchBox = {
      width: '400px', 
      maxWidth: '100%'
    }

    return (
      <Navbar type="dark" style={topbar} >
        <NavbarBrand href="/" style={{fontSize: '30px', fontWeight: '600'}} >Yiflyx</NavbarBrand>

        <Nav style={searchContainer} >
          <div  style={{width: '580px'}} />
          <form onSubmit={search} style={searchBox} >
            <InputGroup size="sm" seamless  >
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