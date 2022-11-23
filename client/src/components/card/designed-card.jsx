import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";
import './card.css';

const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1em 6px 0 6px;
  line-height: 1;
  z-index: 10;
`;

const MediumText = styled.span`
  font-size: 20px;
  color: #3D3D29;
  font-weight: 800;
  text-transform: uppercase;
`;

const SmallText = styled.span`
  font-size: 11px;
  color: #3D3D29;
  font-weight: 700;
  text-transform: uppercase;
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BuyButton = styled.button`
  padding: 10px 16px;
  background-color: #3D3D29;
  color: #000;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  border: 3px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;
  &:hover {
    background-color: transparent;
    color: #9A9A79;
    border: 3px solid #9A9A79;
  }
`;

const NikeLogo = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: auto;
    height: 13px;
  }
`;

export function CardDetails(props) {
  let t = props.t;
  return (
    <DetailsContainer>
      {props.candidate.party ? <div className="border"></div> : (null)}
      <SmallText>{t(props.candidate.party) || null}</SmallText>
      <SpacedHorizontalContainer>
        <div className="border2"></div>
        {props.candidate.name.length > 16 ? (<SmallText>{props.candidate.name}</SmallText>) : (<MediumText>{props.candidate.name}</MediumText>)}
      </SpacedHorizontalContainer>
      <Marginer direction="vertical" margin="1.2em" />
      <SpacedHorizontalContainer>
        <MediumText></MediumText>
        {/* <BuyButton>SAVE</BuyButton> */}
      </SpacedHorizontalContainer>
      <NikeLogo>
        <img />
      </NikeLogo>
    </DetailsContainer>
  );
}