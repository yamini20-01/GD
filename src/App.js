import logo from './logo.svg';
import './App.css';
import { useState, useMemo } from 'react';
import Details from './Details';
import useFetch from './useFetch';

function App() {
  const [query, setQuery] = useState("");

  console.log(query)
  const couse = "React js"
  const [header, headchange] = useState("React class");
  const [searchString, setSearchString] = useState("");
  const { data: detailsdata, isloaded, errorinfo } = useFetch(`https://reqres.in/api/users?page=2`);

  const filteredData = useMemo(() => {
    if (searchString) {
      return detailsdata.data.filter((item) => item.first_name.toLowerCase().includes(searchString.toLowerCase())) || [];
    } else {
      return detailsdata?.data || [];
    }
  }, [searchString, detailsdata]);

  return (
    <div className="App">
      <input type="text" placeholder="Search.." height="60px" width="40px" size="30" onChange={e => setSearchString(e.target.value)} value={searchString} />
      {errorinfo && <div className='errormessage'>{errorinfo}</div>}
      {isloaded && <div>Please Wait .....</div>}
      {detailsdata && <Details detailsdata={(filteredData)}></Details>}
    </div>
  );

}

export default App;