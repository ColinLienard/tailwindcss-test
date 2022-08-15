import { useState } from 'react';
import Navbar from './Navbar';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen bg-slate-900 text-slate-400 flex flex-col items-center">
      <Navbar />
      <button onClick={() => setCount((state) => state + 1)}>{count}</button>
    </main>
  );
};

export default App;
