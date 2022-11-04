import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBBox } from 'cdbreact';

export const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%', color:"orange" }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <span className="ml-3 h5 font-weight-bold"style={{ fontWeight: '600', color:"#d24e01"  }}>Project Tracker</span>
            </a>
            <p className="my-3" style={{ width: '250px', color:"white"  }}>
              We believe that every project counts, no matter how small. That's why we srive to ensure that none of them is ever forgotten.
            </p>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600', color:"#d24e01"  }}>
              Quick Links
            </p>
            <CDBBox flex="column" display="flex">
              <CDBFooterLink href = "/" >Home</CDBFooterLink>
              <CDBFooterLink href="/aboutus">About Us</CDBFooterLink>
              <CDBFooterLink href="/signup">Sign Up</CDBFooterLink>
              <CDBFooterLink href="/login">Sign In</CDBFooterLink>
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