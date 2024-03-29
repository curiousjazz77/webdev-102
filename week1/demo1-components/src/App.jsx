import './App.css'
import Post from '../components/Post'

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to Web 102 🎉</h1>
      <h3>Write a post about what you are excited to learn about!</h3>
      <Post name="Marquees Brownlee" description="I want to learn how to build cleaner user interfaces." numLikes="100"/>
      <Post name="Justine Ezarik" description="I want to become a JavaScript Wizard" numLikes="500"/>
    </div>
  )
}
export default App;
