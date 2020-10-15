import React,{ useState,useEffect } from 'react';
import AddCompany from '../AdminPanel/addcompany';
import Footer from '../AdminPanel/footer';
import AdminHeader from '../AdminPanel/header';

function NewCompany() {
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
            <AddCompany />
          
        </>
    );
};

export default NewCompany;