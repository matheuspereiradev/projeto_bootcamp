import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({
    mensagem: 'teste',
  });
});

app.listen(3000, () => {
  console.log('rodando');
});

//  npm install -D typescript
//  npx tsc --init

//  npm install -D ts-node-dev       para nao ter o dist
