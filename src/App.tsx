import React from 'react';
import logo from './logo.svg';

type ResponseShow = {
  statusCode: number;
  content: string;
}

function App() {
  const [url, setUrl] = React.useState("");
  const [response, setResponse] = React.useState<ResponseShow | null>(null);

  return (
    <div className="App">
      <h1>Testing Frontend !</h1>
      <input type="text" placeholder="URL" style={{width: "80%"}} value={url} onChange={(e) => setUrl(e.target.value)}></input><br/>
      <button onClick={() => request(url, setResponse)}>Request Backend</button>
      {response != null &&
        <>
          <br/>
          <textarea style={{width: "90%", height: "1000px"}} value={"statusCode: "+response.statusCode + "\n" + response.content} readonly></textarea>
        </>
      }
    </div>
  );
}

async function request(url: string, setResponse: any) {
  const resp = await fetch(url, {method: "GET"})//.catch((e) => e)
  setResponse({
    statusCode: resp.status,
    content: `statusText: ${resp.statusText}\n\n`+await resp.text()
  });
}

export default App;
