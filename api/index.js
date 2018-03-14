import express from 'express';

const router = express.Router();

router.get('/', (req, res)=>{
  res.send('Welcome to Dind\'r API');
});

export default router;
