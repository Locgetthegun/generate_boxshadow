
import Global from "./components/Global/Global";
import GenerateBase from "./components/Generate/GenerateBase/GenerateBase";
import {Provider} from 'react-redux'
import { store } from "./redux/store";
function App() {
  return (
  <Provider store={store}>
    <Global>
       <GenerateBase/>
    </Global>
  </Provider>
  );
}

export default App;
