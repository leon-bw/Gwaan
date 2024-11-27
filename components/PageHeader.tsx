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
          <h1 className="page-title">{title}</h1>
          <p className="section-description text-white">{description}</p>
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
