import React, { Component } from 'react'
import Converter from "./Converter";
import Footer from './Footer'
import Header from './Header'


function ConvertPage() {
        return (
            <div>
                <Header />
                <Converter />
                <Footer />
            </div>
        );
    }
export default ConvertPage;