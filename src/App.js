import { useToggleActiveHook } from './hooks/index'

const App = () => {

  const [active, setActive] = useToggleActiveHook(false)

  return (
    <div className="App">
      <h1>Test Environment</h1>

      <button style={{ marginTop: '20px' }} onClick={() => setActive(active => !active)}>Active: <b>{active.toString()}</b></button>
    </div>
  )
}

export default App