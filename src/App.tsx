import { useState } from 'react'
import './App.css'
import PrimaryInput from './components/Input/PrimaryInput'
import { Button, Spacer } from '@chakra-ui/react'
import { useIdentityMutation } from './hooks/useIdentityMutation'

function App() {
  const { mutate } = useIdentityMutation()
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [LastName, setLastName] = useState("");

  const submit = () => {
    mutate({
      email,
      firstName,
      lastName: LastName
    })
  }

  return (
    <div className="container">
      <form>
        <div className="name-form-container">
          <PrimaryInput
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            name="firstName"
            label="First Name"
            placeholder="Ex: João"
          />
          <PrimaryInput
            value={LastName}
            onChange={(event) => setLastName(event.target.value)}
            name="LastName"
            label="Last Name"
            placeholder="Ex: Silva"
          />
        </div>
        <Spacer height="4" />
        <PrimaryInput
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          name="email"
          label="Email Address"
          placeholder="youremail@email.com"
        />
        <Spacer height="4" />
        <Button colorScheme="purple" width="100%" onClick={submit}>
          Submit
        </Button>
      </form>
      <Spacer width="4" maxWidth="6" height="4" maxHeight="6" />
      <div className="product-details">
        <h2>Monthly Payment</h2>
        <p>You've to pay</p>
        <span>$ 39,00</span>
        <Spacer height="2" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
          voluptas doloremque similique hic perspiciatis ratione pariatur. Quasi
          cumque beatae repudiandae illo.
        </p>
      </div>
    </div>
  );
}

export default App;
