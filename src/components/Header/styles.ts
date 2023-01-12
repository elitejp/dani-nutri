import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
  width: 100%;
  height: 100px;

  box-shadow: 0 -2px 10px 0 var(--grey2);
  background-color: var(--ice);

  position: fixed;

  .hamburger-react {
    z-index: 999;
  }

  .animatedMenu {
    position: absolute;
    right: 0;
    background-color: var(--ice);
    padding: 25px 50px;

    width: 100%;
    box-shadow: 0 10px 10px -10px var(--grey2);

    > ul {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .animatedMenu[data-isOpen="false"] {
      display: none;
    }
  }

  > a {
    display: flex;
    justify-content: center;
    background-color: var(--ice);

    z-index: 999;
    width: 90%;
    height: 100%;
  }

  @media (min-width: 760px) {
    height: 120px;

    .animatedMenu {
      top: 3px;
    }

    > a {
      width: 45%;
      padding: 10px 0px;
    }
  }

  @media (min-width: 1000px) {
    .hamburger-react {
      display: none;
    }
    > nav {
      display: none;
    }
  }
`;

export const StyledLogo = styled.img`
  max-height: 100px;
  width: 100%;
  object-fit: contain;
`;

export const StyledContainerNotMobile = styled.div`
  display: none;

  padding: 10px;
  > li {
    padding: 15px;
  }

  @media (min-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 10px;
  }
`;
