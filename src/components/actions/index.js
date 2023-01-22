import axios from 'axios'

const baseUrl = 'https://jsonplaceholder.typicode.com'

export const  getAllPosts = async (setUsers) => {
    const {data : usersData} = await axios.get(
        `${baseUrl}/posts`
    )
    setUsers(usersData)

}


export const  getAllComments = async (setUsers) => {
    const {data : usersData} = await axios.get(
        `${baseUrl}/`
    )
    setUsers(usersData)

}

