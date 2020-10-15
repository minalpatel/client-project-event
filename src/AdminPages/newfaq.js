import React,{ useState,useEffect } from 'react';
import AddFAQ from '../AdminPanel/addfaq';
import Footer from '../AdminPanel/footer';
import AdminHeader from '../AdminPanel/header';

function NewFAQ() {
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
            <AddFAQ />
          
        </>
    );
};

export default NewFAQ;