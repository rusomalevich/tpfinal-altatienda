import './App.css'
import { Header, Footer } from './components'
import { Cart, Contact, DetailPage, HomePage } from './screens'
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
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
