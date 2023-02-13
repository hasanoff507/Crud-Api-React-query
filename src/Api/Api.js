import axios from 'axios'
import { useParams } from 'react-router-dom'

export const Urls = "http://localhost:8000"

const api = axios.create({
  baseURL: Urls
})

export const getAllData = () => api.get('/employee').then(res => { 
  return new Promise((resolve, reject) => {
    resolve(res.data);
    // console.log(res.data);
  });
});


export const postData = async (value) => {
  let url = 'http://localhost:8000/employee';


  const data = await fetch(url,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(value)
    }
  );
  const json = await data.json();

  return new Promise((resolve, reject) => {
    resolve(json);
  });
};

export const putData = async (value) => {

  const id = value.id

  let url = `http://localhost:8000/employee/${id}`;

  const data = await fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "PUT",
    body: JSON.stringify(value),
  });
  const json = await data.json();

  return new Promise((resolve, reject) => {
    resolve(json);
  });
};

export const deleteData = async (id) => {
  let url = `http://localhost:8000/employee/${id}`;

  const data = await fetch(url, {
    method: "DELETE",
    headers: { "content-type": "application/json" },
  });
  const json = await data.json();

  return new Promise((resolve, reject) => {
    resolve(json);
  });
};