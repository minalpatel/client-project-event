import React,{ useState,useEffect }from 'react';
import Header from '../components/header';

import UserDashBoard from '../components/userdashboard';
import Footer from '../components/footer';

function HomePage() {
    const colors = {
        Sea: '#FFFFFF',
       
      }
      const [color, setColor] = useState(colors.Sea)
      useEffect(
        () => {
          document.body.style.background = color
        },
        [color]
      )      
    return(
    <>
<Header />
<UserDashBoard />
<Footer />
</>
    );
};

export default HomePage;