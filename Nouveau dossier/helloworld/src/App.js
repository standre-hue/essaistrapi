import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const [articles,setArticles] = React.useState([]);

  React.useEffect(()=>{
	const getArticles = async()=>{
	var article = await fetch('http://localhost:1337/api/articles')
	article = await article.json()
	console.log(article.data[0].attributes.content)
	setArticles([...article.data])
	}
	
	getArticles()

   },[])
  return (
    <div className="App">
      <div className='navbar'>
	<h1>Liste des Articles</h1>
      </div>

      <div className='container'>
	{
	articles.map((item)=><div className='article'>
		<h3>{item.attributes.title}</h3>
		<p>{item.attributes.content}</p>
		</div>)
	}
		
      </div>
    </div>
  );
}

export default App;
