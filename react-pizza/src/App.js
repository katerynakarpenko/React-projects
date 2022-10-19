import Header from './Header';
import PizzaBlock from './PizzaBlock';
import ContentTop from './ContentTop';

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <Header />

        <div class="content">
          <div class="container">
            <ContentTop />
            
            <h2 class="content__title">All pizzas</h2>
            <div class="content__items">

              <PizzaBlock price="$2" title="Neapolitan Pizza" />
              <PizzaBlock price="$4" title="Chicago Pizza" />
              <PizzaBlock price="$2" title="New York-Style Pizza" />
              <PizzaBlock price="$1" title="Sicilian Pizza" />
              <PizzaBlock price="$6" title="Greek Pizza" />
              <PizzaBlock price="$2" title="California Pizza" />
              <PizzaBlock price="$4" title="Detroit Pizza" />
              <PizzaBlock price="$5" title="St. Louis Pizza" />
              <PizzaBlock price="$2" title="4 cheese pizza" />

            </div>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default App;