import styled from "styled-components";

export const StyledCarousel = styled.div`
  z-index: 10px;

  width: 100%;
  height: max-content;

  img {
    width: 100%;
    height: 60vw;
    object-fit: cover;
  }
  .carouselImages {
    display: flex;
    justify-content: center;
  }
  .carouselToLeft,
  .carouselToRigth {
    display: none;
  }

  @media (min-width: 1000px) {
    img {
      height: calc(100vh - 100px);
      width: calc(160vh);
      margin: auto;
      mask-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 10%,
        rgba(0, 0, 0, 1) 90%,
        rgba(0, 0, 0, 0)
      );
    }

    background-color: var(--ice);

    .computerCountainer {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .carouselToLeft,
    .carouselToRigth {
      display: flex;
      justify-content: center;
      align-items: center;
      height: calc(100vh - 100px);
      width: 100%;

      cursor: pointer;

      p {
        font-size: 50px;
      }
    }
  }
`;

export const StyledCarouselMenu = styled.nav`
  position: relative;
  top: -40px;

  display: flex;
  justify-content: center;

  ul {
    position: absolute;
    z-index: 999;
    display: flex;
    gap: 15px;
  }

  li {
    cursor: pointer;

    width: 32px;
    height: 32px;
    background-color: var(--green);
    opacity: 0.7;
    border-radius: 50%;
  }

  .selected {
    background-color: var(--orange);
    opacity: 0.7;
  }
`;
