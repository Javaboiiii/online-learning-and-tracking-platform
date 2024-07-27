import Courses from "./models.js";
import mongoose from 'mongoose'; 


const resolvers = {
    Query: {
      courses: async (parent, args, contextValue, info) => {
        return await Courses.find(); 
      },
    },

    Mutation: {
      createCourse: async (parent, {details}, contextValue, info) => {
        try { 
          // Simple validation
          if (!details.name || !details.price || !details.createdBy) {
            throw new Error('Missing required fields: name, price, createdBy');
          }
    
          // More complex validation could go here
          console.log(details);
          const course = new Courses(details)
          return await course.save(details)
        }
        catch(e) { 
          return e
        }
      },
    },
};

export default resolvers; 