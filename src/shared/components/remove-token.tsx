export const removeToken = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('login')
}