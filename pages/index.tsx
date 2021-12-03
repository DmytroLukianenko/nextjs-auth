import Router from 'next/router';
import { Button } from 'react-bootstrap';
import { useAuth } from '../auth';



const Home = () => {
  const { user } = useAuth();
  return (
    <div style={{ padding: '40px' }}>
      <h2>It's just Home page </h2>
      <Button onClick={() => { Router.push('/login') }} size='lg'>
        Click me to move on Login page
      </Button>

    </div>
  )
}

export default Home