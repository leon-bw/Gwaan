import Header from "@/components/header";

type Props = { children: React.ReactNode };

const RootLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default RootLayout;
