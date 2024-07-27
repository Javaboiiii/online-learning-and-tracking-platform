const typeDefs = `#graphql
  type Course {
    name: String! 
    price: String! 
    createdBy: String! 
    createdAt: String!
    deadline: String!
  }

  input CourseContent{ 
    name: String! 
    price: String! 
    createdBy: String! 
    deadline: String!
  }

  type Query { 
    courses: [Course]
  }

  type Mutation{ 
    createCourse(details: CourseContent!): Course!
  }
`;

export default typeDefs; 