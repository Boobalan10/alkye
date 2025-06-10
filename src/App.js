import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import './App.css';
import PageRoute from './Routes/Routes';
import { AppProvider } from './ContextAPI/AppContext';

function App() {
  return (
    <AppProvider>
      <div className="App">

        <Router basename='/bhive'>
          <Suspense fallback='Loading'>

            {PageRoute.map((item) => (
              <Routes key={item.id}>
                <Route
                  path={item.path}
                  element={<item.element />}
                  name={item.name}
                />
              </Routes>
            ))}
          </Suspense>
        </Router>
      </div>
    </AppProvider>
  );
}

export default App;
