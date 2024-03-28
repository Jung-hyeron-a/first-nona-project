const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
import rectimg from './assets/react-core-concepts.png';

function getRandomInt(max){
  return Math.floor(Math.random()*(max+1)); {/**math.floor 은 반올림 해주는 함수다.  */}
}

function Header(){
  const description = reactDescriptions[getRandomInt(2)];

  return (
    <header>
        <img src={rectimg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}
 
function App() {
  return (
    <div>
      <Header></Header>  {/* <Header /> 이 방식으로 간격하게 써도됨. 이 부분이 functiom Header을 이야기하는것 */}
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
