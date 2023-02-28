import { FC, useState } from 'react'
import './App.css'
import { Points } from './constants/points'
import { Form } from './components/form/Form'
import { ThemeContext } from './hooks/theme/useTheme'

export const App: FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className={'container-' + theme}>
        <Form
          titleFirst="My "
          titleSecond="Title"
          subtitle="Here is my cool subtitle. This is something that everyone likes"
          points={Points}
          okText="Let’s go!"
          laterText="Later"
        />
        <button onClick={toggleTheme} className={'toggler-' + theme}>
          {theme === 'light' ? 'dark' : 'light'}
        </button>
      </div>
    </ThemeContext.Provider>
  )
}
