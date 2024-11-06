import { ReactNode } from "react";

type PageHeaderProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

const PageHeader = ({ title, description, children }: PageHeaderProps) => {
  return (
    <section className="section-bg">
      <div className="section-container md:pt-24">
        <div className="section-heading flex flex-col items-center gap-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white to-seaGreen text-transparent bg-clip-text mt-6 pb-2 text-center capitalize">
            {title}
          </h1>
          <p className="section-description text-white">{description}</p>
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
