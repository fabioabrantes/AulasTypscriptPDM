/* para criar o usuario: name,email e password */
export default function createUser2(name = "", email: string, password: string) {
  const User = {
    name,
    email,
    password,
  };
  return User;
}

interface Disciplina {
  name:string,
  cod:string
}

interface User{
  name?:string,
  email:string,
  password:string,
  disciplinas:Array<string | Disciplina>
  formacoes:string[]
}

export let createUser = ({name,email,password,disciplinas,formacoes}:User)=>{
  const User = {
    name,
    email,
    password,
    disciplinas,
    formacoes
  }
  return User;
}