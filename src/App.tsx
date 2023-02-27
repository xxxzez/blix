import { Form } from './components/form'
import './App.css'
import { Points } from './constants/points'

function App() {
  return (
    <div className="container">
      <Form
        title="My title"
        subtitle="Here is my cool subtitle. This is something that everyone likes"
        points={Points}
        okText="Let’s go!"
        laterText="Later"
      />
    </div>
  )
}

export default App
