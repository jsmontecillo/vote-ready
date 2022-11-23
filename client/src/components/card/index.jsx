import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { CardDetails } from "./designed-card";
import './card.css';

const CardWrapper = styled.div`
  width: 100%;
  perspective: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled(motion.div)`
  width: 285px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: beige;
  color: #fff;
  position: relative;
  cursor: grab;
`;

const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;
`;

const Circle = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  top: -4.2em;
  right: -10em;
  z-index: 5;
  background-color: #5d4f91;
  border-radius: 50%;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 15px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex: 0.8;
  padding: 0 1em;
`;

const NikeText = styled.h1`
  color: #3D3D29;
  text-transform: uppercase;
  text-shadow: 1px 1px #202013;
  margin-bottom: 180px;
  z-index: 10;
  font-size: 30px;
  font-weight: 900;
  text-align: left;
`;

const ShoesWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Shoes = styled(motion.div)`
  width: auto;
  height: 190px;
  z-index: 6;
  user-select: none;
  margin-right: 3em;
  margin-top: 4.3em;
  img {
    width: auto;
    height: 100%;
    user-select: none;
  }
`;

function Card(props) {
  let t = props.t;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);


  return (
    <CardWrapper>
      <CardContainer
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        <TopContainer>
          <CircleWrapper>
            <Circle style={props.candidate.party === "Party Preference: Democratic" ? {backgroundColor: "#83A1CD"} : props.candidate.party === "Party Preference: Republican" ? {backgroundColor: "#CB4C4E"} : props.candidate.party === "Party Preference: Green" ? {backgroundColor: "#96D294"} : {backgroundColor: "grey"}}/>
          </CircleWrapper>
          <ShoesWrapper>
            <Shoes
              style={{ x, y, rotateX, rotateY, z: 100000, marginLeft: "50px", marginBottom: "-40px" }}
              drag
              dragElastic={0.12}
              whileTap={{ cursor: "grabbing" }}
            >
              <img src={props.candidate.image || null} style={{height: "400px", width: "283px", borderRadius: "10px", objectFit: "cover"}}/>
            </Shoes>
          </ShoesWrapper>
          <NikeText><div style={props.contest.length > 36 ? {fontSize: "20px"} : {}}>{t(props.contest)}</div></NikeText>
        </TopContainer>
        <BottomContainer>
          <CardDetails candidate={props.candidate} t={props.t}/>
        </BottomContainer>
      </CardContainer>
    </CardWrapper>
  );
}

export default Card;