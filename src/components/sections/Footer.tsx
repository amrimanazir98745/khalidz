import { ImageSwitch } from "@/components/ImageSwitch";

export function Footer() {
  return (
    <div id="footer" className="tf-footer flat-spacing">
      <div className="block-quote effectFade fadeUp no-div">
        <h5 className="quote-text font-3 fw-normal text-black-72">
          <span className="text-black-56">&ldquo;</span>
          Design is not just what it looks like and feels like. Design is how it works.
          <span className="text-black-56">&rdquo;</span>
        </h5>
        <p className="quote-author font-3 text-black-56 h6 text-end">Steve Jobs</p>
      </div>
      <div className="br-line" />
      <div className="foot-inner">
        <div className="isak effectFade fadeUp no-div">
          <span
            style={{
              fontSize: "clamp(60px, 12vw, 140px)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              color: "rgba(0,0,0,0.72)",
              fontFamily: "inherit",
              display: "block",
            }}
          >
            KHALID
          </span>
        </div>
        <a href="#" className="f-logo effectFade fadeZoom">
          <div className="logo">
            <ImageSwitch
              light="/assets/images/logo/logo-kz.svg"
              dark="/assets/images/logo/logo-kz.svg"
              width={32}
              height={32}
            />
          </div>
        </a>
      </div>
      <div className="foot-bottom">
        <p className="text-nocopy text-black-56 effectFade fadeUp no-div">
          All rights reserved <br />© 2026 Khalid Mohamed Zarook
        </p>
        <div className="isak effectFade fadeUp no-div">
          <span
            style={{
              fontSize: "clamp(50px, 10vw, 120px)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(0,0,0,0.56)",
              fontFamily: "inherit",
              display: "block",
            }}
          >
            ZAROOK
          </span>
        </div>
      </div>
    </div>
  );
}
