import HeaderLogo from "./HeaderLogo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <>
      <section className="flex justify-center items-center py-3 bg-black text-white text-sm">
        <div className="inline-flex gap-1 items-center">
          <p className="font-light tracking-wider">Beta coming soon</p>
        </div>
      </section>
      <header className="sticky top-0 bg-night z-10">
        <div className="max-w-screen-2xl mx-auto">
          <div className="w-full flex items-center justify-end lg:justify-between py-4 px-4 lg:px-14">
            <div className="w-full justify-between flex items-center lg: gap-x-16">
              <HeaderLogo /> <Navigation />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
