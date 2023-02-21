import './App.css';
import { Body } from './components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WatchVideoPage from './components/WatchVideoPage';
import MainContainer from './components/MainContainer';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[{
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"watch",
        element:<WatchVideoPage/>
      }
    ]
  }
])


function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
