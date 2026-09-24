import { awards } from "@/data/awards";

export function About() {
  return (
    <div id="about" className="section-about flat-spacing">
      <div className="sect-tag text-caption fw-medium effectFade fadeUp no-div">
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
      <ul className="award-list">
        {awards.map((a) => (
          <li className="award-item hover-cursor-img" key={a.name + a.year}>
            <div className="left">
              <h6 className="award_name letter-space--2 text-black-72">{a.name}</h6>
              <p className="award_desc text-black-56">{a.publisher}</p>
            </div>
            <h6 className="award_year text-black-72">{a.year}+ yrs</h6>
            <div className="award_img hover-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" width={158} height={224} src={a.image} alt={a.name} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
