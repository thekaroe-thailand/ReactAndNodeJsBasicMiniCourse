module.exports = {
  getHello: (req, res) => {
    res.send("Hello World!");
  },
  getHelloName: (req, res) => {
    res.send("Hello My name is " + req.params.name);
  },
  myPost: (req, res) => {
    res.send("Hello " + req.body.name);
  },
  myPut: (req, res) => {
    res.send("id = " + req.params.id + " name = " + req.body.name);
  },
  myDelete: (req, res) => {
    res.send("delete id = " + req.params.id);
  },
  postFromJson: (req, res) => {
    res.send(req.body.name + " " + req.body.phone);
  },
  login: (req, res) => {
    try {
      const username = req.body.username;
      const password = req.body.password;

      if (username == "admin" && password == "admin") {
        res.send({ message: "success" });
      }

      throw "unauthorized";
    } catch (e) {
      res.statusCode = 500;
      res.send({ message: e });
    }
  },
};
