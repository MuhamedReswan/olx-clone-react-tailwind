import React from 'react';
import Card from './Card';
import TopBar from './TopBar';
import Banner from './Banner';
import Login from './Login';

const Home = () => {
  return (
<div >
<TopBar/>
  <Banner/>
  <h1 className=' pt-4 ps-6 text-3xl'>Quick meenu</h1>
  <div className=" m-6 grid grid-cols-12 gap-4 ">
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Login/>
  </div>
 
</div>
  )
}

export default Home
