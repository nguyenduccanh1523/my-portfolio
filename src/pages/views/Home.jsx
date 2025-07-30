import React from 'react'
import Header from '../../components/Header/Header'
import Body from '../../components/Body/Body'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className='max-w-7xl mx-auto'>
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  )
}

export default Home
