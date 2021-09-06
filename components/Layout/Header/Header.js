import React from 'react';
import Image from 'next/image';
import Burger from './Burger';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
`;

const ContentContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;

  @media (min-width: 768px) and (max-width: 1200px) {
    padding-left: 100px;
    padding-right: 100px;
  }

  @media (max-width: 768px) {
    padding-left: 30px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <ContentContainer>
        <Image
          src="/assets/images/Logo.png"
          alt="picture of website logo"
          width="45"
          height="50"
        />
        <Burger />
      </ContentContainer>
    </HeaderContainer>
  );
};

export default Header;
