'use client'

import React, { useState } from 'react';
import styled from '@emotion/styled';

const ToggleContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 260px;
  height: 100px;

  ::after {
    content: '';
    position: absolute;
    height: 100px;
    width: 1px;
    top: 0px;
    left: 0; 
    right: 0; 
    bottom: 0; 
    margin-left: -25px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%); // little notch highlight at top
    z-index: 0;
  }
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

type SliderProps = {
    isChecked: boolean;
  };

const Slider = styled.span<SliderProps>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.isChecked ? '#191e2c' : '#191e2c'};
  transition: .2s;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:before {
    position: absolute;
    content: "";
    height: 88px;
    width: 248px;
    left: ${props => props.isChecked ? '4px' : '5px'};
    bottom: 4%;
    background-image: ${props => props.isChecked ? 'linear-gradient(to left, #FF9900 20%, #FF5C00 70%)' : 'linear-gradient(to left, #FF5C00  20%, #FF9900  70%)'};
    transition: .2s;
    border-radius: 10px;
    box-shadow: ${props => props.isChecked ? 'inset -45px 0 0px #E5420A' : 'inset 45px 0 0px #FF5C00'};
    transform: scale(0.98);

  }
  :active::before {
    transform: scale(0.977);
  }
  
  ::after {
    content: '';
    position: absolute;
    height: 50px;
    width: 1px;
    top: 23px;
    left: 0; 
    right: 0; 
    bottom: 0; 
    margin-left:-1px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%); // little notch highlight at top
    z-index: 0;
  }

`;

const OnOffToggle = () => {
    const [isChecked, setIsChecked] = useState(false);
  
    const toggleSwitch = () => setIsChecked(!isChecked);
  
    return (
      <ToggleContainer>
        <ToggleInput type="checkbox" checked={isChecked} onChange={toggleSwitch} />
        <Slider isChecked={isChecked} />
      </ToggleContainer>
    );
  };

export default OnOffToggle;