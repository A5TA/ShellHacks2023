import { Charities, HomePage, Individuals, AboutUs } from "./components"
import { Navbar, Footer } from "./components/shared"

type currentRouteType = {
  page: string,
}

const App = ({page}: currentRouteType) => {
  return (
    <>
      <Navbar />
      {page == "Home" && <HomePage />}
      {page == "Individuals" && <Individuals />}
      {page == "Charities" && <Charities />}
      {page == "AboutUs" && <AboutUs />}
      <Footer />
    </>
  )
}

export default App