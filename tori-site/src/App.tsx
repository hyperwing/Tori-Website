import { BrowserRouter, Routes, Route } from "react-router-dom"
import Gallery from "./components/pages/Gallery"

export default function App() {
  return (
    <BrowserRouter>
      <main className="max-w-7xl mx-auto p-4 md:p-8">
        <Routes>
          <Route path="/" element={<Gallery />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}