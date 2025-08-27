import Layout from '@/components/Layout'
import FilterEstate from '@/components/home/FilterEstateSection'
import BlogSection from '@/components/home/BlogSection'
export default function FavoriteProperty () {
  return (
    <Layout title='Propiedades favoritas'>
      <div>
        <FilterEstate title='Tus propiedades favoritas' />
      </div>
      <div>
        <BlogSection />
      </div>
    </Layout>
  )
}
