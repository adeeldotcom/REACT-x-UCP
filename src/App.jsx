import Header, { UCP } from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
import Form from './Components/Form'
import Axios from './Components/Axios' // ✅ fixed import

const App = () => {
  return (
    <div>
      <Header />
      <UCP />
      <Main />
      <Axios /> {/* ✅ using your Axios component */}
      <Form />
      <Footer />
    </div>
  )
}

export default App
