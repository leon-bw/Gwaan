import Product from "@/components/product";

const ProductShowcase = () => {
  return (
    <section className="bg-seaSalt py-24">
      <div className="container px-4 lg:px-14 mx-auto">
        <div className="max-w-xl mx-auto">
          <h2 className="section-title pb-2">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Forget checking your form in the mirror or losing track of your
            reps. Our AI solution analyses your movements in real-time,
            providing instant feedback so you can focus on what really matters
            and maximize your results!
          </p>
          <Product />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
