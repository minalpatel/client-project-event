import React,{ useState,useEffect } from 'react';
import DisplayFaq from '../AdminPanel/faq';
import Footer from '../AdminPanel/footer';
import AdminHeader from '../AdminPanel/header';

function DisplayFaqs() {
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
            <AdminHeader />
            <DisplayFaq />
          
        </>
    );
};

export default DisplayFaqs;