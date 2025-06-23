import Header from "@/components/header";
import Footer from "@/components/footer";
import React from "react";

const PublicLayoutPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  );
};

export default PublicLayoutPage;
