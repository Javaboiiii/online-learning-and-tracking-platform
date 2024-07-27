"use client"
import { useQuery, gql } from '@apollo/client';

const GET_BOOKS = gql`
  query Query {
    books {
      author
      title
    }
  }
`

export default function Home() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.books.map((e, i) => {
    return <p key={e.title}>
            {e.title}, {e.author}
          </p>
  })
}

