import { Suspense } from "react"
import AllRoutes from "./routes"

function App() {
  return (
    <>
      <Suspense fallback={
        <div className='d-flex align-items-center justify-content-center top-0 left-0 position-fixed h-100 w-100'>
          <span>Loading...</span>
        </div>
        }>
        <AllRoutes />
      </Suspense>
    </>
  );
}

export default App
