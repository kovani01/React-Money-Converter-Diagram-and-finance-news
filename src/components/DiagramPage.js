import React, { Component } from 'react'
import Stock from './finance'
import Footer from './Footer'
import Header from './Header'


function DiagramPage() {
        return (
            <div>
                <Header />
                <Stock />
                <Footer />
            </div>
        );
    }
export default DiagramPage;