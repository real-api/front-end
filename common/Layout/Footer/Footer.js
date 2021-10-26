import React from 'react';
import Image from 'next/image';

import styled from 'styled-components';

const FooterDiv = styled.footer`
  background-color: #f5f5f5;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  z-index: 5;

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

  .container {
    display: flex;
    width: 60%;
    justify-content: space-evenly;
  }

  .container div {
    margin: 0 40px 0;
    text-align: center;
    margin-bottom: 50px;
  }

  .container img {
    border-radius: 10px;
  }

  .container h3 {
    color: #1565d6;
  }

  @media (max-width: 1200px) {
    .container {
      width: 80%;
    }
  }

  @media (max-width: 768px) {
    .container {
      width: 100%;
      flex-direction: column;
    }

    .container div {
      margin-left: 0;
      margin-right: 0;
    }

    .container img {
      width: 200px;
      height: 160px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterDiv>
      <div className="container">
        <div>
          <Image
            height="190"
            width="150"
            src="/assets/images/milad.png"
            alt="Banner"
          />
          <h3>Milad Azami</h3>
          <p>Front-End Developer</p>
        </div>
        <div>
          <Image
            height="190"
            width="150"
            src="/assets/images/erfan.png"
            alt="Banner"
          />
          <h3>Erfan Yousefi</h3>
          <p>Back-End Developer</p>
        </div>
      </div>
      <p>
        <span className="text">
          Made with <span>♥</span> by
        </span>{' '}
        <span> M</span>ilad & <span>E</span>rfan
      </p>
    </FooterDiv>
  );
};

export default Footer;
