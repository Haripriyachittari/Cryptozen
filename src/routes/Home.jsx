import React from 'react'
import Coinsearch from '../components/Coinsearch'

import Trending from '../components/Trending'

const Home = ({coins}) => {
  return (
    <div>
      <Coinsearch coins={coins}/>
      <Trending />
      

    </div>
  )
}

export default Home
