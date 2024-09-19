import HeaderLogo from "./header-logo";
import Navigation from "./navigation";

const Header = () => {
  return (
    <>
      <header className="bg-gradient-to-b from-green-950 to-green-900">
        <section className="flex justify-center items-center py-3 bg-black text-white text-sm">
          <div className="inline-flex gap-1 items-center">
            <p>Beta coming soon</p>
          </div>
        </section>
        <div className="max-w-screen-2xl mx-auto">
          <div className="w-full flex items-center justify-end lg:justify-between mb-14 py-4 px-4 lg:px-14">
            <div className="flex items-center lg: gap-x-16">
              <HeaderLogo /> <Navigation />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
