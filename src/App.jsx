import react from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {  QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App=()=>{
  const queryclient= new QueryClient()
  return(
    <div>
      <QueryClientProvider client={queryclient}>
<ReactQueryDevtools/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}>
        <Route path="/header" element={<Header/>}/>
        </Route>
        <Route path="/products" element={<Products/>}/>
        <Route path="" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
      </QueryClientProvider>
    </div>
  )
}
export default App