//backend part

import { connectToDatabase } from "@/mongodb";

export default async function handler(req, res) {
  //     console.log(req);
  //   if (req.method == "GET") {
  //     res.status(200).json({ name: "Movie Data" });
  //   } else {
  //     res.status(404).json({ message: "Not Found" });
  //   }

  //   connecting db here to get the data from mongodb (store in mongodb compass)
  const client = await connectToDatabase();
  const db = client.db();
  const moviesCollection = db.collection("Movies");
  const movies = await moviesCollection.find().toArray();

  res.status(200).json(movies);
}
