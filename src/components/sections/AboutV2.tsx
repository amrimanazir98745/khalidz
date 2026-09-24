"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const portfolioImages = [
  "/assets/images/khalid/portfolio/salam-academy.jpg",
  "/assets/images/khalid/portfolio/qatar-national-day.jpg",
  "/assets/images/khalid/portfolio/socal-restaurant.jpg",
  "/assets/images/khalid/portfolio/khaz-sheikh-nomani.jpg",
  "/assets/images/khalid/portfolio/almhd-healthcare.jpg",
  "/assets/images/khalid/portfolio/odai-restaurant-eid.jpg",
  "/assets/images/khalid/portfolio/icst-accounting-business.jpg",
  "/assets/images/khalid/portfolio/icst-it-diploma.jpg",
];

export function AboutV2() {
  return (
    <div id="about" className="section-about type-2 flat-spacing">
      <div className="sect-tag text-caption fw-medium">
        <i className="icon icon-user-circle" />
        About
      </div>
      <h4 className="s-title letter-space--2 text-black-72 split-text effect-blur-fade">
        Crafting visual experiences <br className="d-none d-lg-block" />
        that connect brands with <br className="d-none d-lg-block" />
        people who matter
      </h4>
      <p className="s-desc text-black-56 scrolling-effect effectTop">
        I&apos;m a creative and detail-oriented Graphic Designer and Digital Media Specialist
        <br className="d-none d-lg-block" /> with over 4 years of experience in visual content, brand identity, and social media. <br />
        <br />
        I&apos;ve worked with GCC brands, restaurants, universities, and e-commerce businesses —
        <br className="d-none d-lg-block" /> creating bilingual Arabic–English designs that resonate across the region.
      </p>

      <div className="wrap-hover-award d-none d-sm-block">
        <div className="award-inner">
          <div className="award-front">
            <div className="image">
              <Image
                width={237}
                height={336}
                src="/assets/images/khalid/portfolio/salam-academy.jpg"
                alt="Salam Academy Qatar Campaign"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="award-back">
            <div className="image">
              <Image
                width={237}
                height={336}
                src="/assets/images/khalid/portfolio/qatar-national-day.jpg"
                alt="Qatar National Day Patriotic Artwork"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="award-small">
              {portfolioImages.slice(2, 6).map((src, i) => (
                <div className="image-small" key={i}>
                  <Image
                    width={158}
                    height={224}
                    src={src}
                    alt={`portfolio-${i}`}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Pagination]}
        className="swiper swiper-award d-sm-none"
        slidesPerView={2}
        slidesPerGroup={2}
        spaceBetween={10}
        speed={1000}
        pagination={{ el: ".tf-sw-pagination", clickable: true }}
        dir="ltr"
      >
        {portfolioImages.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="image-small">
              <Image
                width={158}
                height={224}
                src={src}
                alt={`portfolio-${i}`}
                style={{ objectFit: "cover" }}
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="sw-dot-default tf-sw-pagination" slot="container-end" />
      </Swiper>
    </div>
  );
}
