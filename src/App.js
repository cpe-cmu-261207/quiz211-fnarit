import React, { useState } from 'react';
function App() {
  const persons = [
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    }
  ];
  return (
    <div class="ml-2">
      <h3 class="title is-3">Person List</h3>

      {/* Convert me to a component! */}
      <table class="table is-bordered mb-3">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Bob</td>
            <td>male</td>
            <td>50</td>
          </tr>
        </tbody>
      </table>
    </div>  
      {/* Code me please! */}
      
      const App = () => {
        let a = 620612152;
        const [count, setCount] = useState(a)
        const plus = () => setCount(count+1)
        const minus = () => setCount(count-1)
        const reset = () => setCount(this.setCount())
      return(
        <div className="App">
        <h3 class="title is-3">ID Counter</h3>
        <p>{a}</p>
        <button onClick={minus}>-</button>
        <button>reset</button>
        <button onClick={plus}>+</button>
        </div>
      );
      
}

export default App;
