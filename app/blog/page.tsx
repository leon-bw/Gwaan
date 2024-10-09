

const Blog = () => {
  return (
    <>
      <section className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_right,#318741,#141414_90%)] overflow-x-clip">
        <div className="container max-w-screen-xl mx-auto pt-12 pb-20 px-4 lg:px-14 md:pt-5 md:pb-10 text-center">
          <div className="section-heading">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-white to-seaGreen text-transparent bg-clip-text mt-6 text pb-6">
              Our Story so far...
            </h1>
            <p className="section-description text-white mx-auto">
              Follow our journey from start-up to a growing community, get the
              latest updates exploring the innovation behind your new go-to
              workout partner and the passion fueling smarter workouts every
              step of the way.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
