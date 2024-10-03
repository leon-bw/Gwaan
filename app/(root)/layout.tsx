import Footer from "@/components/footer";
import Header from "@/components/header";

type Props = { children: React.ReactNode };

const RootLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;
