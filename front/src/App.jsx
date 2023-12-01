import './App.css'
import { Header, Footer } from './components'
import { Cart, Contact, DetailPage, HomePage, EditList, EditDetail, CreatePage } from './screens'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <Header />
      <main>
        {/*<ProductsPage />*/}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/api/products/:id' element={<DetailPage />} />
          <Route path='/create' element={<CreatePage />} />
          <Route path='/edit' element={<EditList />} />
          <Route path='/api/products/edit/:id' element={<EditDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
