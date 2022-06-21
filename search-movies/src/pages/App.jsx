import '../styles/App.css'

function App () {
  const user = {
    image: undefined
  }
  return (
    <>
      <div className='App'>
        Search Movies
      </div>
      <img src={user?.image || 'cualquier valor'} alt='' />
    </>
  )
}

export default App
