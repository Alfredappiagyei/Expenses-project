import {v4 as uuid} from "uuid";


const initialState = {
  users: [
      {
          id: "1",
          name: "Alfred Appiagyei",
          email: "alfred@gmail.com",
          gen: 1
      },
      {
        id: "2",
          name: "Joojo Aninful",
          email: "aninful@email.com",
          gen: 6
      },
      {
        id: "3",
          name: "Samuel Owusu",
          email: "samuel@gmail.com",
          gen: 5
      },
      {
        id: "4",
          name: "Nicolas Coleman",
          email: "coloman@gmail.com",
          gen: 3
      }
  ]


}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
      case "ADD_USER":
          const newUser = {
              id: uuid(),
              name: action.payload.name,
              email: action.payload.email,
              gen: action.payload.gen
          };
          return { ...state, users: [...state.users, newUser] };
          case "DELETE_USER":
              const filteredUsers = state.users.filter(user => user.id != action.payload);
              return  {...state, users: filteredUsers}

      default:
          return state;

  }
};

export default usersReducer;