import Header from './Header';
import PizzaBlock from './PizzaBlock';
import ContentTop from './ContentTop';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />

        <div className="content">
          <div className="container">
            <ContentTop />
            
            <h2 className="content__title">All pizzas</h2>
            <div className="content__items">

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