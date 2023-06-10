import { gql } from "@apollo/client";

export const CREATE_TODO_MUTATION = gql`
  mutation CreateTodo($data: TodoCreateInput!) {
    createTodo(data: $data) {
      id
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation updateTodo($id: ID!, $data: TodoUpdateInput!) {
    updateTodo(where: { id: $id }, data: $data) {
      id
    }
  }
`;

export const DELETE_TODO = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(where: { id: $id }) {
      id
    }
  }
`;

export const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      title
      category
      checked
    }
  }
`;

export const GET_USER = gql`
  query GetUser {
    users {
      id
      email
    }
  }
`;
