let messages = [];
let id = 0;

module.exports = {
  createMessage: (req, res) => {
    messages.push({ id: id, text: req.body.text , time: req.body.time });
    id++;
    res.status(201).send(messages);
  },
  readMessages: (req, res) => {
    res.status(200).send(messages);
  },
  updateMessage: (req, res) => {
    const { id } = req.params;
    const index = messages.findIndex(item => item.id === +id);
    const updatedMsg = { ...messages[index], ...req.body };
    messages[index] = updatedMsg;
    res.status(200).send(messages);
  },
  deleteMessage: (req, res) => {
    const index = messages.findIndex(item => item.id === +req.params.id);
    messages.splice(index, 1);
    res.status(202).send(messages);
  }
};
