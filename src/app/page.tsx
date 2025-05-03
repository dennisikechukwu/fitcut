import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import Fitness from "@/components/Fitness"
import ProfileCard from "@/components/Profile"
import Daily from "@/components/Daily"
import ImageGrid from "@/components/Image"
import PricingSection from "@/components/Price"

export default function Home() {
  return (
    <div className="">
      <Nav/>
      <Hero/>
      <Fitness/>
      <ProfileCard/>
      <Daily/>
      <ImageGrid/>
      <PricingSection/>
      
      
    </div>
  )
}