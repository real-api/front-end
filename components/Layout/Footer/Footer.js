import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';

const FooterDiv = styled.footer`
  background-color: #f5f5f5;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  .text {
    font-weight: 200;
    color: #a8a7a7;
  }

  p {
    color: grey;
    font-weight: 600;
  }

  span {
    color: #1565d6;
  }
`;

const CoffeeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    position: relative;
    top: 5px;
    margin-left: 10px;
    color: #802c6e;
    font-size: 15px;
  }
`;

const Footer = () => {
  return (
    <FooterDiv>
      <p>
        <span className="text">
          Made with <span>&nbsp;♥&nbsp;</span> by
        </span>{' '}
        &nbsp; <span>E</span>rfan &<span> M</span>ilad
      </p>
      <CoffeeDiv>
        <img src="/assets/images/coffee.svg" alt="coffee icon" />
        <Link href="/donation">Buy me a coffe</Link>
      </CoffeeDiv>
    </FooterDiv>
  );
};

export default Footer;
