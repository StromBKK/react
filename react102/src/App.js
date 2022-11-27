import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const [note,setNote] = useState({
      content: '',author:''
    });
    
    function onNoteValueChange(event){
      const { name,value } = event.target;
      setNote( (prevNote) => {
        return {
          ...prevNote,
          [name]: value
        }
      })
    }

  return (
    <section className="app-section">
        <div className="app-container">
          <h3>test</h3>
          <p>
            <textarea rows="3"
              placeholder="บันทึกข้อความ"
              name="content"
              value={note.content}
              onChange={onNoteValueChange}
            />
          </p>
          <p>
            <input type="text"
              placeholder="บันทึกข้อความ"
              name="author"
              value={note.author}
              onChange={onNoteValueChange}
            />
          </p>
        </div>
    </section>
  );
}

export default App;
