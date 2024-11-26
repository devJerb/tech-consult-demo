import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="mb-4">
            TechConsult Pro is a leading IT consulting firm with over a decade
            of experience in delivering innovative solutions to businesses
            across various industries.
          </p>
          <p>
            Our team of expert consultants is committed to helping you leverage
            cutting-edge technologies to drive growth, improve efficiency, and
            stay ahead of the competition.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
