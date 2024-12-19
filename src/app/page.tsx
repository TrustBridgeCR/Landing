import { BestBusiness } from "@/components/BestBusiness";
import { FirstBlock } from "@/components/FirstBlock";
import { Footer } from "@/components/Footer/";
import { Header } from "@/components/Header";
import { PaymentsMethods } from "@/components/PaymentsMethods";

export default function Home() {
  return (
    <>
      <Header />
      <FirstBlock />
      <BestBusiness />
      <PaymentsMethods />
      <Footer />
    </>
  )
}
