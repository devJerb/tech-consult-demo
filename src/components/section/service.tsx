import React from "react";

import { Server, Code, LineChart } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      {icon}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Service: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Server className="w-12 h-12 mb-4" />}
            title="IT Infrastructure"
            description="Optimize your IT infrastructure for maximum efficiency and reliability."
          />
          <ServiceCard
            icon={<Code className="w-12 h-12 mb-4" />}
            title="Custom Software Development"
            description="Tailored software solutions to meet your unique business needs."
          />
          <ServiceCard
            icon={<LineChart className="w-12 h-12 mb-4" />}
            title="Data Analytics"
            description="Turn your data into actionable insights with our advanced analytics services."
          />
        </div>
      </div>
    </section>
  );
};

export default Service;
