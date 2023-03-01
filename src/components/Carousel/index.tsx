import React, { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import importAllimages from "../../utils/importAllImages";
import { StyledCarousel, StyledCarouselMenu } from "./styles";

const Carousel: React.FC = () => {
  const images = importAllimages(
    require.context("../../assets/carousel", true, /\.(png|PNG|jpe?g|svg)$/)
  );

  const [selectedImage, setSelectedImage] = useState<number>(0);

  let loopCarouselTimer: NodeJS.Timer;

  const loopCarousel = () => {
    loopCarouselTimer = setTimeout(() => {
      if (selectedImage === images.length - 1) {
        setSelectedImage(0);
      } else {
        setSelectedImage(selectedImage + 1);
      }
    }, 4000);
  };

  useEffect(() => {
    loopCarousel();
  }, [selectedImage]);

  return (
    <StyledCarousel>
      <div className="computerCountainer">
        <motion.div
          className="carouselToLeft"
          animate={{ x: [10, 40, 0, 10] }}
          transition={{
            duration: 1,
            times: [0, 0.4, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 2,
          }}
          onClick={() => {
            if (selectedImage === 0) {
              clearTimeout(loopCarouselTimer);
              setSelectedImage(images.length - 1);
            } else {
              clearTimeout(loopCarouselTimer);
              setSelectedImage(selectedImage - 1);
            }
          }}
        >
          <p>{"<"}</p>
        </motion.div>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className="carouselImages"
            key={images[selectedImage].name}
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img src={images[selectedImage].image} alt="carousel" />
          </motion.div>
        </AnimatePresence>
        <motion.div
          className="carouselToRigth"
          animate={{ x: [-10, -40, 0, -10] }}
          transition={{
            duration: 1,
            times: [0, 0.4, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 2,
          }}
          onClick={() => {
            if (selectedImage === images.length - 1) {
              clearTimeout(loopCarouselTimer);
              setSelectedImage(0);
            } else {
              clearTimeout(loopCarouselTimer);
              setSelectedImage(selectedImage + 1);
            }
          }}
        >
          <p>{">"}</p>
        </motion.div>
      </div>

      <StyledCarouselMenu>
        <ul>
          {images.map((image, index) => {
            return (
              <li
                key={image.name}
                className={image === images[selectedImage] ? "selected" : ""}
                onClick={() => {
                  clearTimeout(loopCarouselTimer);
                  setSelectedImage(index);
                }}
              />
            );
          })}
        </ul>
      </StyledCarouselMenu>
    </StyledCarousel>
  );
};

export default Carousel;
