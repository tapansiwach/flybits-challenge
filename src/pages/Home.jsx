import React from 'react'
import './Home.scss'
import { useNavigate } from 'react-router'

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="container">
        <p
          onClick={() => navigate("/marketer")}
        >
          Marketer UI
        </p>
        <p
          onClick={() => navigate("/user")}
        >
          User UI
        </p>
      </div>
    </div>
  )
}
