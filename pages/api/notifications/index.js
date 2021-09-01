function notifications(req, res) {
  return res.json({
    totalCart: 10,
    notif: 3,
    inbox: {
      unread: 5
    },
  })
}

export default notifications