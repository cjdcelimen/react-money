import React, { useState } from 'react';
import { Sidebar, Navbar, InfoElement, Hero, Services, Footer } from '.';
import { homeObjOne, homeObjTwo, homeObjThree } from '../data/Data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero />
            <InfoElement {...homeObjOne} />
            <InfoElement {...homeObjTwo} />
            <InfoElement {...homeObjThree} />
            <Services />
            <Footer />
        </>
    )
}

export default Home
