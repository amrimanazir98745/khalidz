export type Testimonial = {
  text: string;
  authorName: string;
  authorRole: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    text: "Khalid's eye for design is exceptional. He captured our brand's essence perfectly — every layout, color choice, and detail felt intentional and impactful.",
    authorName: "Ahmed Al-Rashid",
    authorRole: "Restaurant Owner, Doha",
    image: "/assets/images/section/tes-1.jpg",
  },
  {
    text: "Working with Khalid was seamless from start to finish. He understood our GCC audience and delivered bilingual designs that truly resonated with our customers.",
    authorName: "Fatima Al-Mansoori",
    authorRole: "Marketing Manager, Dubai",
    image: "/assets/images/section/tes-2.jpg",
  },
  {
    text: "Khalid delivered stunning motion graphics and social content that skyrocketed our engagement. His creativity and professionalism are top-tier.",
    authorName: "Ravi Shankar",
    authorRole: "Brand Director, Sri Lanka",
    image: "/assets/images/section/tes-3.jpg",
  },
];
