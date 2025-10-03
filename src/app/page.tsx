
import Hero from '../components/Hero'
import CoreServices from "@/components/CoreServices";
import Company from '@/components/Company'
import WhyChooseUs from "@/components/WhyChooseUs";
export default function Home() {

  return (
    <div className="">
      <Hero/>
      <CoreServices/>
      <Company/>
      <WhyChooseUs/>
    </div>
  );
}
