import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import '../App.css';

export default function Home() {
  return (
      <>
      <div className='home-container'>
      <div>
          <p className='hello'> Hello, My name is...... </p>
      </div>
    <div>
        <h1 className='name'>Julius Franklin</h1>
        {/* <p className='i-build'> ( Software Engineer )</p> */}
    </div>
    <div>
        <p className='description'>
            I'm a software engineer specializing in building full stack web applications. <br/> Currently focused on backend development. <br/> I possess a strong passion for creating things that impact consumers and businesses alike.
        </p>
       <Link to='/work' className='link'><Button variant="outlined" size='large' color='primary'>Check my Work!</Button></Link>
    </div>
    </div>

        </>
  )
}
