import jwt from 'jsonwebtoken'

function login(req, res) {
  // if (req.method !== 'POST') return res.status(404).json({
  //   message: 'resource not available'
  // });

  const secret = "akuemangsecret"
  const token = jwt.sign({
    id: '1',
    name: 'Dicka'
  }, secret)

  return res.status(200).json(
    {
      token
    }
  )
}

export default login