import React from 'react'
import TopbarAdmin from '../../components/layout/admin/TopbarAdmin/index';
import Footer from '../../components/layout/Footer';
import MenuAdmin from '../../components/layout/admin/Navbar';

import BackToTop from '../../components/layout/BackToTop'
import { LayoutProvider } from '../../context/useLayoutContext';
import BasicElements from '../../components/basic_elements/page';




const Dashboard = () => {
  return (
    <>
      <LayoutProvider>

        <TopbarAdmin />
        
      </LayoutProvider>
    </>
  )
}

export default Dashboard