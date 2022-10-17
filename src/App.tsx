import './App.css';
import ContainerBox from './components/ContainerBox';
import Header from './components/Header';
import Input from './components/todo/Input';

function App() {
  return (
    <>
      <Header title="Todo App"/>
      <ContainerBox>
      <Input />
      </ContainerBox>
    </>
  );
}

export default App
