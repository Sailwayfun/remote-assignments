import './App.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Content from "./content/Content"
import Container from './container/Container';

const queryClient = new QueryClient();


function App() {


  return (
    <div className="body-container">
      <QueryClientProvider client={queryClient}>
        <Container>
          <Content />
        </Container>
      </QueryClientProvider>
    </div>
  )
}

export default App
