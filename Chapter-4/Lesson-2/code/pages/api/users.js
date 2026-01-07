let users = [
  {
    id: 1,
    salary: 909090,
    name: "alina",
  },
  {
    id: 2,
    salary: 7878900,
    name: "alex",
  },
];

export default function handler(req, res) {
  res.status(200).json({ mesasge: users });
}
