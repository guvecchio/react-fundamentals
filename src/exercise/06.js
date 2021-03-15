// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //

let usernameRef = React.useRef()

/*
  React.setState() retorna um VETOR no qual
  * o 1º elemento é a variável que vai armazenar o estado
  * o 2º elemento é o nome de uma função que será utilizada
  para atualizar o estado. Seu nome, por convenção, é sempre
  set + o nome da variável de estado com inicial maiúscula

  * Opcionalmente, pode ser passado ao useState() um valor inicial
  para o estado.
*/

let [error, setError] = React.useState('')
let [username, setUsername] = React.useState('')


// função chama sempre que há alteração no imput
function handleChange(event){
  const imputVal = event.target.value // Captura o conteúdo do imput

  /*
  Converter o conteúdo do imput para minúsculas e armazenar na variável de estado
  */
  
  setUsername(imputVal.toLowerCase())

  /*
  // Validação: será que o usuário escreveu o username totalmente em minúsculas?
  const username = event.target.value
  if(username.toLowerCase() !== username){
    setError('O username deve ser informado totalmente em minúsculas!')
  }
  else setError('')
*/

}

function handleSubmit(event){
  event.preventDefault()  // Evitar que a página recarregue
  // Capturar o valor do input (caixa de texto)
  
  //const username = document.getElementById('username').value
  //const username = document.querySelector('#username').value
  /*
    event -> o evento de envio (submit)
    target -> o que disparou o evento, no caso, o formulÃ¡rio (form)
    elements[0] -> o primeiro elemento dentro do form
  */
  //const username = event.target.elements[0].value
  const username = usernameRef.current.value
  onSubmitUsername(username)

}

  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
      {/* 
        eM jsx, <label htmlFor="username"> equivale, em HTML puro,
        a <label for="usarname">
      */}
        <label htmlFor="usarname">Username:</label>
        <input ref={usernameRef} id="username" type="text" onChange={handleChange} value={username} />
        <div style={ {color: 'red'} } role="alert">{error}</div>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
