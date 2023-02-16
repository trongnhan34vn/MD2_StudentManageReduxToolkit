import logo from './logo.svg';
import './App.css';
import Control from './components/Control';
import ListStudents from './components/ListStudents';
import Form from './components/Form';
import { useSelector } from 'react-redux';
import { toggleSelector } from './components/redux/selector';

function App() {
  const toggle = useSelector(toggleSelector)
  const elementForm = (toggle.status) ? <Form /> : ""
  return (
    <div className="App">
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* START CONTROL */}
            <Control toggle={toggle}/>
            {/* END CONTROL */}
            {/* START LIST STUDENT */}
            <ListStudents />
            {/* END LIST STUDENT */}
          </div>
        </div>
        {/* START FORM SINH VIEN */}
        {elementForm}
        {/* END FORM SINH VIÊN */}
      </div>

    </div>
  );
}

export default App;
