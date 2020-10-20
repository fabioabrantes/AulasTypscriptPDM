import {Request,Response} from 'express';

import {createUser} from './createUser';

export let displayUser = (req:Request,res:Response) =>{
  const user = createUser({
    name:'ffafsfgsd',
    email:'fdsffgfd',
    password:'fgdfbcgb',
    disciplinas:['fnaoo',{cod:'eedfds',name:'PDM'}],
    formacoes:['mestrado','especializacao']
  });

  res.json(user);
}