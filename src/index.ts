import express from 'express';
import {displayUser} from './services/controller';


const app = express();

app.get('/', displayUser);

app.listen('3333',()=>{
  console.log('servidor está online');
});