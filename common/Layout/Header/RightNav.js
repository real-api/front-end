import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin: 0;
  z-index: 15;
  li {
    padding: 18px 30px;
    color: #6e6e6e;
    transition: all 0.2s ease;

    &:hover {
      color: #1565df;
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #1565d6;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;

      &:hover {
        color: #fff;
      }
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/docs">Docs</Link>
      </li>
      <li>
        <a href="#" target="_blank">
          GitHub
        </a>
      </li>
      <li>
        <Link href="/donation">Buy me a coffee</Link>
      </li>
    </Ul>
  );
};

export default RightNav;
