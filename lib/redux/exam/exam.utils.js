export const fetchUsers = async (amount) => {
    console.log(amount, 'amount of users')
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data, 'daf')
    return data
}