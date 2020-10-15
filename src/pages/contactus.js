import React,{ useState,useEffect } from 'react';
import Header from "../components/header";
import Contactus from '../components/contactus';
import Footer from '../components/footer';

function ContactusPage() {
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
<Contactus />
<Footer />
</>
    );
};

export default ContactusPage;