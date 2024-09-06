import React from 'react'
import Faculties from '../Components/Faculties'
import faculties from '../faculties'
const FacultyPage = () => {
  return (
    <Faculties theme="light"
        label="Our Faculties"
        heading="Programs Offered At Olabisi Onabanjo University"
        showAll={true}
        db={faculties} />
  )
}

export default FacultyPage