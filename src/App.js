import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';

function App() {
  const[list,setList]=useState([
    {name:'arcane',imgsr:'https://occ-0-38-987.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYvKSaxT-5Oj6jY0OWXSvf-yo5fgpGUYSKOVKXQqfvbTVnQnVlZKY8nDf-ozZpVT9gn_qd3tYWaaUszlPuRwTU5ZJ7zhFgBZMdqPlLG63w90dF5C3tSoxamSRFT0mF8UzivzGQ.jpg?r=c00',rate:'5'},
    {name:'breaking bad',imgsr:'https://www.pause-canap.com/media/wysiwyg/serie-breaking-bad.JPG',rate:'4'},
    {name:'resident evil',imgsr:'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/33273264/0b977c32c1266e74151b97e7e5f621c4df2858c5.jpg',rate:'5'},
  ])
  const [filtreList,setFilter]=useState(list)

  const p=useRef()
  const p2=useRef()
  const p3=useRef()
  const p4=useRef()
  const add=()=>{
    setList([...list,
    {
      name:p.current.value,
      imgsr:p3.current.value,
      rate:p2.current.value,
      
    }])
  }
  useEffect(()=>{
    setFilter(list)
  },[list])
  const valid=()=>{
    setFilter(list.filter(e=>e.name.includes(p4.current.value)))
  }
  return (
    <div className="App">
      
      <div className='name'>
      <input type={"text"} ref={p} placeholder="name movie"></input>
      <input type={"text"} ref={p2} placeholder="rate movie"></input>
      <input type={"text"} ref={p3} placeholder="image link"></input>
    
      
      <input type="text"  onChange={valid} ref={p4}></input>
      
      <button onClick={add} className="button">+</button>
      </div>
      <div className='movie'>
    {filtreList.map(e=><p className='moviepic'>{e.name} 
    <StarRatingComponent
          name="rate1" 
          starCount={5}
          value={e.rate}
         
        />
      <img src={e.imgsr}></img>
    </p>)}
    </div>
   
    </div>
  );
}

export default App;
