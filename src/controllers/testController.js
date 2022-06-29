exports.get = (req, res, next) => {
  res.status(200).send({
    test: 'SpotyBox',
    company: 'Disney Corp',
  });
};

exports.post = (req, res, next) => {
  res.status(201).send(req.body);
  console.log(req.body);
};

exports.put = (req, res, next) => {
  const id = req.params.id;
  res.status(200).send({
    id: id,
    item: req.body,
  });
};

exports.delete = (req, res, next) => {
  res.status(200).send(req.body);
};
