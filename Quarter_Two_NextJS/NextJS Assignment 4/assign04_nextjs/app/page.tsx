"use client"
import { useState } from 'react';

function Home() {

  const students = [
    {
      name: 'arun',
      gender: 'Male',
      physics: 88,
      maths: 87,
      english: 78
    },
    {
      name: 'rajesh',
      gender: 'Male',
      physics: 96,
      maths: 100,
      english: 95
    },
    {
      name: 'moorthy',
      gender: 'Male',
      physics: 89,
      maths: 90,
      english: 70
    },
    {
      name: 'raja',
      gender: 'Male',
      physics: 30,
      maths: 25,
      english: 40
    },
    {
      name: 'usha',
      gender: 'Female',
      physics: 67,
      maths: 45,
      english: 78
    },
    {
      name: 'priya',
      gender: 'Female',
      physics: 56,
      maths: 46,
      english: 78
    },
    {
      name: 'Sundar',
      gender: 'Male',
      physics: 12,
      maths: 67,
      english: 67
    },
    {
      name: 'Kavitha',
      gender: 'Female',
      physics: 78,
      maths: 71,
      english: 67
    },
    {
      name: 'Dinesh',
      gender: 'Male',
      physics: 56,
      maths: 45,
      english: 67
    },
    {
      name: 'Hema',
      gender: 'Female',
      physics: 71,
      maths: 90,
      english: 23
    },
    {
      name: 'Gowri',
      gender: 'Female',
      physics: 100,
      maths: 100,
      english: 100
    },
    {
      name: 'Ram',
      gender: 'Male',
      physics: 78,
      maths: 55,
      english: 47
    },
    {
      name: 'Murugan',
      gender: 'Male',
      physics: 34,
      maths: 89,
      english: 78
    },
    {
      name: 'Jenifer',
      gender: 'Female',
      physics: 67,
      maths: 88,
      english: 90
    }
  ];


  const [name_st, setName_st] = useState(0);

  const handleNext = () => {
    if (name_st < students.length - 1) {
      setName_st(name_st + 1);
    }
  };

  const handlePrevious = () => {
    if (name_st > 0) {
      setName_st(name_st - 1);
    }
  };

  const buttonStyle = {
    backgroundColor: 'blue',
    border: '4px solid green',
    borderRadius: '10px',
    color: 'white',
    fontWeight: 'bold',
    padding: '8px 16px',
    margin: '8px',
    cursor: 'pointer'
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div>
          <h1>Name: {students[name_st].name}</h1>
          <h3><b>Gender:</b> {students[name_st].gender} </h3>
          <h3><b>Physics:</b> {students[name_st].physics} </h3>
          <h3><b>Maths:</b> {students[name_st].maths} </h3>
          <h3><b>English:</b> {students[name_st].english} </h3>
          <button style={buttonStyle} onClick={handlePrevious}>Previous</button>
          <button style={buttonStyle} onClick={handleNext}>Next</button>
        </div>
      </div>
    </main>
  );
}

export default Home;