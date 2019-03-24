import React from "react";
import { css, cx } from "emotion";

// nav__icon icon__chip icon--active

const buttonContainer = css`
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 5px 0;
  text-align: center;
  border: 3px solid transparent;
`;

const buttonContainerActive = css`
  border-left: 3px solid var(--primary-color);
`;

const chipStyle = css`
  position: relative;
  &::before {
    display: inline-block;
    position: absolute;
    top: -20px;
    right: -13px;
    font-size: 10px;
    padding: 1px 4px;
    min-width: 7px;
    height: 13px;
    content: attr(count);
    border-radius: 10px;
    color: black;
    border: 3px solid white;
    font-weight: 700;
    background-color: var(--primary-color);
  }
`;

export default function NavButton({ active, children, count }) {
  return (
    <div className={cx(buttonContainer, active && buttonContainerActive)}>
      <a href="#" className={count && chipStyle} count={count}>
        {children}
      </a>
    </div>
  );
}
