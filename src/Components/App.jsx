import React from 'react';
import Head from './Head';
import Interactive from './Interactive';
import Style from './Styling';
import Translate from './Translate';
import Founders from './Founders';
import Portfolio from './Portfolio';
import Contactus from './Contactus';
import Newsletter from './Newsletter';
import Feedback from './Feedback';
import Sliding from './Slinding';
import Footer from './Footer';
import Server from './Server';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter><Routes>
                <Route path='/' element={<Server />} />
                <Route path='/head' element={<Head />} />
                <Route path='/interactive' element={<Interactive />} />
                <Route path='/translate' element={<Translate />} />
                <Route path='/style' element={<Style/>} />
                <Route path='/founders' element={<Founders />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/contactus' element={<Contactus />} />
                <Route path='/newsletter' element={<Newsletter />} />
                <Route path='/feedback' element={<Feedback />} />
                <Route path='/sliding' element={<Sliding />} />
                <Route path='/footer' element={<Footer />} />
            </Routes>
            </BrowserRouter></>
    );
}
export default App;