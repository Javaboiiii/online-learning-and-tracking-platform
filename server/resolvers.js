import { Courses, Users } from "./models.js";
import mongoose from 'mongoose';


const resolvers = {
  User: { 
    course : async (par, args) => {
      const findUser = Courses.find({ madeBy: par.userName }) 
      if (findUser) {
        return findUser
      }else { 
        return 'No Courses'
      }
    }
  },
  Query: {
    courses: async (parent, args, contextValue, info) => {
      return await Courses.findAll();
    },
    user: async (parent, { userName }, contextValue, info) => {
      const find = Users.findOne({ userName: userName })
      if (find) {
        return find
      } else {
        return "Error from your side"
      }
    },
    users: async (parent, args) => { 
      return await Users.find()
    }
  },

  Mutation: {
    createCourse: async (parent, { details }, contextValue, info) => {
      try {
        console.log(details);
        const course = new Courses(details)
        return await course.create(details)
      }
      catch (e) {
        return e
      }
    },

    createUser: async (parent, { details }, contextValue, info) => {
      try {
        console.log(details);
        const findUser = await Users.findOne({ userName : details.userName })

        if(findUser) { 
          return "Already registered"
        }else { 
          const RegisterUser = new Users(details) ;
          return await RegisterUser.save(details) 
        }
      }
      catch (e) {
        return e
      }
    },
  },
};


export default resolvers; 