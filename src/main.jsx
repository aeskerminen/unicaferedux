import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const dispatchFeedbackEvent = (ev) => {
    store.dispatch({
      type: ev
    })
  }

  return (
    <div>
      <button onClick={() => dispatchFeedbackEvent('GOOD')}>good</button> 
      <button onClick={() => dispatchFeedbackEvent('OK')}>ok</button> 
      <button onClick={() => dispatchFeedbackEvent('BAD')}>bad</button>
      <button onClick={() => dispatchFeedbackEvent('ZERO')}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
