import React from 'react'
import './About.css'
import Button from '../../Component/FormComponent/Button'

export default function About() {

  const handleClick = () => {

  }

  const teamMembers = [
    {
      id: 1,
      name: "Taufique Ali",
      role: "Lead Developer & Co-Founder",
      description: "Passionate entrepreneur with a vision to connect readers worldwide.",
      email: "taufiqueali2911@gmail.com",
      image: "https://www.w3schools.com/w3images/team1.jpg",
    },
    {
      id: 2,
      name: "Abdur Rahman Qasmi",
      role: "CEO & Founder",
      description: "Dedicated to building meaningful connections with book enthusiasts.",
      email: "ayeshakhan@example.com",
      image: "https://www.w3schools.com/w3images/team2.jpg",
    },
    {
      id: 3,
      name: "Tausif Ali",
      role: "Tech Advicer & Developer",
      description: "Committed to creating seamless online experiences for our customers.",
      email: "rehanahmed@example.com",
      image: "https://www.w3schools.com/w3images/team3.jpg",
    },
  ];


  return (
    <div className='about_main d-flex flex-column align-items-center gap-4 pb-4'>
      <h1>Who we are</h1>
      <div className='description_para'>
        Welcome to our online bookstore, a one-stop destination for book enthusiasts of all kinds! Whether you're passionate about novels, searching for academic resources, or exploring a variety of genres, we’ve got you covered. We take pride in offering a wide selection of books to cater to readers of all ages and interests. Our mission is to make quality books accessible and affordable, providing a seamless shopping experience for every book lover. Discover your next favorite read with us!
      </div>

      <div className='d-flex align-items-center gap-3 flex-wrap'>
        {
          teamMembers?.map((data, _) => (
            <div className="about_card flex-sm-grow-0 flex-grow-1">
              <div className='d-flex justify-content-between gap-3 flex-column '>
                <img src={data.image} alt="nigarishat-founder" />
                <h1 className='m-0'>{data?.name}</h1>
                <span>{data?.role}</span>
                <p className='m-0'>{data?.description}</p>
                <a href={`mailto:${data?.email}`}>{data?.email}</a>
                <Button text={'Contact'} onClick={handleClick} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
