import express from 'express';
const router = express.Router();

router.get('/users', (req, res)=>{
    res.send({users: [{
        "id": 1,
        "name": "Shelly",
        "skills": ["Ruby", "Rails", "JavaScript"],
        "experience": "Junior"
      },
      {
        "id": 2,
        "name": "Avery",
        "skills": ["C++", "Java", "JavaScript"],
        "experience": "Senior"
      }]});
})

export default router;