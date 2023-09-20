import './App.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import MainContainer from "../src/content/Container"

const queryClient = new QueryClient();


function App() {


  return (
    <div className="body-container">
      <QueryClientProvider client={queryClient}>
        <MainContainer />
      </QueryClientProvider>
    </div>
  )
}

export default App
