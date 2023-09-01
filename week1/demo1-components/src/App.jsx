import './App.css'
import Post from '../components/Post'

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to Web 102 🎉</h1>
      <h3>Write a post about what you are excited to learn about!</h3>
      <Post />
      <Post />
    </div>
  )
}
export default App;
