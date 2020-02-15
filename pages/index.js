import { css } from '@emotion/core';
import { motion, useAnimation } from 'framer-motion';
import React, { useRef } from 'react';
import tw from 'tailwind.macro';

const Container = tw.div`
  absolute
  inset-0
  w-full
  h-full
  bg-gray-300
  flex
  justify-center
  items-center
`;

const boxStyles = tw`
  w-20
  h-20
  bg-purple-300
`;


const planeStyles = css`
  ${tw`
    absolute
  `};

`;

const Test = motion.div;

const IndexPage = () => {
  const containerRef = useRef();

  const controls = useAnimation();

  const variants = {
    bounce: k => ({
      x: '2vw',
      transition: {
        duration: 0.3,
        flip: Infinity,
        ease: "linear"
      }
    })
  }

  controls.start(variants.bounce);
  const restartAnimation = () => controls.start(variants.bounce);

  return (
    <Container ref={containerRef}>
      <Test
        css={boxStyles}
        drag
        dragElastic={0}
        dragMomentum={false}
        dragConstraints={containerRef}
        variants={variants}
        animate={controls}
        onDragEnd={restartAnimation}
      />
    </Container>
  );
}

export default IndexPage;
