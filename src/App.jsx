


import "./styles/index.scss";
import Contact from './Contact'
import Navbar from './components/Navbar';
import PageSection from "./components/PageSection";
import RecipeGrid from "./components/RecipeGrid";
//import Recipes from "./components/Recipes/Recipes";



function App() {

  return (
    <>
    <div className="App">
      <Navbar></Navbar>
      <div className="container main">

        
        <RecipeGrid></RecipeGrid>
        <PageSection></PageSection>
      
        <Contact></Contact>
      </div>
    </div>
    </>
  )
}

export default App