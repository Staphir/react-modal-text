import React from 'react'
import ReactDOM from 'react-dom'
import { ModalText } from './lib/react-modal-text'

ReactDOM.render(
  <React.StrictMode>
    <ModalText buttonName="button" text="modal text"></ModalText>
  </React.StrictMode>,
  document.getElementById('root')
)