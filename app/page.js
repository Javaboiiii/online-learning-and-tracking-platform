"use client"
import { useQuery, gql } from '@apollo/client';

const GET_COURSES = gql`
  query Query {
    users {
      userName
    course {
      courseId
      madeBy
      name
      price
    }
  }
}
`

export default function Home() {
  const { loading, error, data } = useQuery(GET_COURSES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.users.map((e, i) => {
    return e.course.map((element, i) => { 
      return (
        <p key={element.name}>{element.price}, {element.madeBy}, {element.name} </p>
      )
    })
  }) 
}

