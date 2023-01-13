import axios from "axios"

export const fetchBooks = () => {
  return new Promise((resolve, reject) => {
    axios.get("http://demo2096578.mockable.io/books").then((response) => {
      resolve(response.data || [])
    }).catch((err) => {
      reject(err)
    })
  })
}