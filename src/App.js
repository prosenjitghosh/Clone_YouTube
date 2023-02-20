import './App.css';
import { Body } from './Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WatchVideoPage from './WatchVideoPage';
import MainContainer from './MainContainer';

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
