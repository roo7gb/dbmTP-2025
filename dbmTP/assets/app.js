import React, { useState } from 'react';
import axios from 'axios';

const RCodeEditor = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const runCode = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/api/r/run/', { code });
      setOutput(response.data.output);
    } catch (error) {
      setOutput(`Error: ${error.response.data.error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <textarea
        value={code}
        onChange={handleCodeChange}
        rows="10"
        cols="50"
        placeholder="Write your R code here"
      />
      <button onClick={runCode} disabled={loading}>
        {loading ? 'Running...' : 'Run Code'}
      </button>
      <div>
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default RCodeEditor;
