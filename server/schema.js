const typeDefs = `#graphql
  type Course {
    courseId: ID!
    name: String! 
    price: String! 
    madeBy: String!
    createdAt: String!
    deadline: String!
  }

  input CourseContent{ 
    name: String! 
    price: String! 
    madeBy: String! 
    deadline: String!
  }

  input UserDetails { 
    userName: String! 
  }

  type User { 
    userName: String!, 
    course: [Course]
  }

  type Query { 
    courses: [Course]
    user(userName: String!): User
    users: [User]
  }

  type Mutation{ 
    createCourse(details: CourseContent!): Course!
    createUser(details: UserDetails!) : User!
  }
`;

export default typeDefs; 