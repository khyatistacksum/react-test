import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
// import Login from "./auth/login";
// const Product = lazy(() => import("./Container/Product/Product"));
const Login = lazy(() => import("./auth/login"));


function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/Login" element={<Login />} />
          {/* <Route path="/" element={<PrivateNavBar />}> */}
            {/* <Route path="/product" element={<Product />} /> */}
          {/* </Route> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
