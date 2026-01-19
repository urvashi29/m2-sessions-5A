import { withSession } from "@/session";

const getUser = async function (req, res) {
  const user = req.session.get("user");
  console.log(user);
  if (user) {
    res.json({ loggedIn: true , ...user });
  } else {
    res.json({ loggedIn: false });
  }
};

export default withSession(getUser);
