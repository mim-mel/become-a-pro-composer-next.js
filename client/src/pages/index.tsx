import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';

import Banner from '../components/main/Banner';

const Main: NextPage = () => {
  const [IsMenu, setIsMenu] = useState(false);

  return (
    <>
      <Banner />
      {/* <Profile /> */}
      {/* <HowToLeran />
      <ConnectBanner />
      <LoveUs />
      <Footer /> */}
    </>
  );
};

// interface Props {
//   $istrue?: boolean;
// }

// const Wrap = styled.div<Props>`
//   width: ${props => (props.$istrue ? '500px' : '200px')};
//   height: 300px;
//   background-color: aliceblue;
// `;

export default Main;
