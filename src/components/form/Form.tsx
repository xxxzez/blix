import React, { useState } from 'react'
import './styles.css'

type FormType = 'manual' | 'advanced'

export function Form() {
  const [formType, setFormType] = useState<FormType>('manual')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [serverAddress, setServerAddress] = useState('')
  const [addressPath, setAddressPath] = useState('')
  const [port, setPort] = useState('')
  const [useSSL, setUseSSL] = useState(false)

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormType(e.target.value as FormType)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Perform validation here
    alert('Form submitted!')
  }

  return (
    <div className="form">
      <div className="rowItem">
        <label htmlFor="formType">Select form type:</label>
        <select id="formType" value={formType} onChange={handleSelectChange}>
          <option value="manual">Manual</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div className="rowItem">
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="name@example.com"
        />
      </div>

      <div className="rowItem">
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Required"
        />
      </div>

      <div className="rowItem">
        <label htmlFor="serverAddress">Server Address:</label>
        <input
          id="serverAddress"
          type="text"
          value={serverAddress}
          onChange={(e) => setServerAddress(e.target.value)}
          placeholder="example.com"
        />
      </div>

      {formType === 'advanced' && (
        <>
          <div className="rowItem">
            <label htmlFor="addressPath">Address Path:</label>
            <input
              id="addressPath"
              type="text"
              value={addressPath}
              onChange={(e) => setAddressPath(e.target.value)}
              placeholder="/calendars/users"
            />
          </div>

          <div className="rowItem2">
            <label htmlFor="port">Port:</label>
            <input
              id="port"
              type="text"
              value={port}
              onChange={(e) => setPort(e.target.value)}
              className="port"
            />
            <label htmlFor="useSSL">Use SSL:</label>
            <input
              id="useSSL"
              type="checkbox"
              checked={useSSL}
              onChange={(e) => setUseSSL(e.target.checked)}
            />
          </div>
        </>
      )}
    </div>
  )
}
