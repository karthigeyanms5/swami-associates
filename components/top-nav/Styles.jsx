import { motion } from "framer-motion";
import styled from "styled-components";

export const Header = styled.header`
  background: #fbfbf9;
  position: relative;
  display: flex;
  justify-content: flex-end;
  z-index: 2;
`;

export const Nav = styled(motion.nav)`
  background-color: #f8eeec;
  height: 60vh;
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const Link = styled(motion.li)``;

export const SvgBox = styled(motion.div)``;
