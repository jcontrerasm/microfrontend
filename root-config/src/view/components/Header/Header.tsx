import React, { useState } from 'react';
import { navigateToUrl } from 'single-spa';
import { HeaderStyle, Nav, NavItem } from './styled';

export const Header = () => {
  const [selectedItem, setSelectedItem] = useState<string>("none");

  const onClick = (url: string) => (): void => {
    setSelectedItem(url.split('/')[1]);
    navigateToUrl(url);
  }

  console.log(selectedItem);

  return (
    <HeaderStyle>
      <div>Gestor de imágenes</div>
      <Nav>
        <NavItem onClick={onClick('/home')}>Home</NavItem>
        <NavItem onClick={onClick('/modules')}>Módulos</NavItem>
        <NavItem onClick={onClick('/sellercenter')}>Sellercenter</NavItem>
      </Nav>
    </HeaderStyle>
  );
}
