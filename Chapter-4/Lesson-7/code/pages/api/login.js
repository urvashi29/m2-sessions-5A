import { data } from "@/data";
import { withSession } from "@/session";

const handler = async function (req, res) {
  const { userName, password } = req.body;
  console.log(userName, password);
  const user = data.find((item) => item.username === userName);
  if (user && user.password === password) {
    req.session.set("user", user);
    await req.session.save();
    res.status(200).json({ message: "user authenticated" });
  } else {
    res.status(403).json({ message: "user not authenticated" });
  }
};

// withSession is like high ordered component
export default withSession(handler);
