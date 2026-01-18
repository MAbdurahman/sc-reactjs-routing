import React, {Fragment} from 'react';
import {LogoImg} from '../../styles/Navbar.styled.jsx';
import logo from '../../assets/img/logo.svg';
import eMartLogo from '../../assets/img/eMart-Logo-2.svg';

export default function Logo() {
   return (
      <LogoImg src={eMartLogo} alt='Index'/>
   );
}