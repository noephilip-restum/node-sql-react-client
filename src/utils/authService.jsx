
const isAuth = () => {

  const token = localStorage.getItem("token")
  return token ? true : false
}

export default isAuth

