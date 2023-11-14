import { Route, Routes } from 'react-router-dom'

// import Layout from './components/Layout/Layout'

import Home from './components/Home/Home'
import About from './components/About/About'
import './App.scss'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <>
      <div className="App">
        <Sidebar />
        <div className="page">
          <span className="tags top-tags">&lt;body&gt;</span>
          <Routes>
            {/* <Route path="/" element={<Layout />} /> */}
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <span className="tags bottom-tags">
            &lt;/body&gt;
            <br />
            <span className="bottom-tag-html">&lt;/html&gt;</span>
          </span>
        </div>
      </div>
    </>
  )
}

export default App
