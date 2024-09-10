import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

//layouts
import RootLayout from './layouts/RootLayout';

//pages
import Home from './pages/Home';
import Post from './pages/Post';

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout/>}>
    <Route path='/' element={<Home />} />
    <Route path='/:id' element={<Post/>} />
  </Route>
  
))
function App() {
  return (
    <RouterProvider router={appRouter}/>
  );
}

export default App;
