import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBBox } from 'cdbreact';

export const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%', color:"orange" }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src="logo" width="30px" />
              <span className="ml-3 h5 font-weight-bold"style={{ fontWeight: '600', color:"#d24e01"  }}>Project Tracker</span>
            </a>
            <p className="my-3" style={{ width: '250px', color:"white"  }}>
              We are creating High Quality Resources and tools to Aid developers during the
              developement of their projects
            </p>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600', color:"#d24e01"  }}>
              Project Tracker
            </p>
            <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0',color:"white"}}>
              <CDBFooterLink class = "text" href="/">Resources</CDBFooterLink>
              <CDBFooterLink class = "text"href="/">About Us</CDBFooterLink>
              <CDBFooterLink class = "text"href="/">Contact</CDBFooterLink>
              <CDBFooterLink class = "text"href="/">Blog</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600', color:"orange" , color:"#d24e01"}}>
              Help
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0', color:"#d24e01"  }}>
              <CDBFooterLink class = "text"href="/">Support</CDBFooterLink>
              <CDBFooterLink class = "text"href="/">Sign Up</CDBFooterLink>
              <CDBFooterLink class = "text"href="/">Sign In</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600', color:"#d24e01"  }}>
              Products
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0', color:"#d24e01"  }}>
              <CDBFooterLink class = "text"href="/">Windframe</CDBFooterLink>
              <CDBFooterLink class = "text"href="/">Loop</CDBFooterLink>
              <CDBFooterLink class = "text"href="/">Contrast</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <CDBBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ width: '100%' }}
          className="mx-auto mt-4"
        >
          <small className="text-center" style={{ width: '50%', color:"#d24e01"  }}>
            &copy; Project Tracker, 2022. All rights reserved.
          </small>
          <CDBBtn flat color="" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};