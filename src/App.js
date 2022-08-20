import Header from './component/header';
import Headline from './component/headline';
import './app.scss';

function App() {

  const tempArr = [{
    fName: "Joe",
    lName: "Smith",
    email: "joesmith@gmail.com",
    age: 23,
    onlineStatus: true,
  }]

  return (
    <div className="app">
    <Header />
    <section className="main" >
      <Headline header="Posts" desc="Click the button to render posts" tempArr={tempArr} />
    </section>
    </div>

    );
}

export default App;
