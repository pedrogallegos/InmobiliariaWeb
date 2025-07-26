import Layout from '../components/Layout'
import FilterEstate from '@/components/home/FilterEstateSection'
import HeroSection from '@/components/home/HeroSection'
import PopularProperties from '@/components/home/PopularPropertiesSection'
import Reviews from '@/components/home/ReviewsSection'
import Blog from '@/components/home/BlogSection'
import ActivitiesSection from '@/components/home/ActivitiesSection'
import DetailedProperty from '@/components/home/DetailedProperty'

export default function Home () {
  return (
    <Layout title='Home' description='Welcome to our website'>
      <main>
        {/* Hero Section */}
        <HeroSection />
        {/* FilterEstate Section */}
        <FilterEstate />
        {/* Popular Properties Section */}
        <PopularProperties />
        {/* Reviews */}
        <Reviews />
        {/* Blog */}
        <Blog />
        {/* Activities Section */}
        <ActivitiesSection />
        <DetailedProperty />
      </main>
    </Layout>
  )
}
