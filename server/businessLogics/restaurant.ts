import Restaurant from "../models/Resturant";

export const RestaurantLogic = {
  async create(input: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const createRes = await Restaurant.insertMany(input);
        if (!createRes.length) return reject("Restaurant not found");
        return resolve(createRes);
      } catch (error) {
        return reject(error);
      }
    });
  },

  async fetchs() {
    return new Promise(async (resolve, reject) => {
      try {
        // const getData = await Restaurant.find(
        //   {},
        //   { _id: 0, borough: 1, cuisine: 1, name: 1, "address.zip": 1 }
        // );
        // const getData = await Restaurant.find({ borough: "Bronx" })
        //   .skip(5)
        //   .limit(5);

        // const getData = await Restaurant.find({
        //   "grade.score": { $gt: 80, $lt: 90 },
        // });

        // const getData = await Restaurant.find({
        //   "address.cord": { $lt: "-73.856077" },
        // });

        // const getData = await Restaurant.find({
        //   cuisine: { $ne: "Chinese" },
        //   "grade.score": { $gt: 80 },
        //   "address.cord": { $lt: "40.743482" },
        // });
        // const getData = await Restaurant.find({
        //   cuisine: { $ne: "American" },
        //   "grade.grade": { $eq: "A" },
        //   borough: { $ne: "Brooklyn" },
        // });

        // const getData = await Restaurant.find({
        //   //   name: { $regex: "^mor", $options: "i" },
        //   name: { $regex: "/zawa$/", $options: "i" },
        // });

        // const getData = await Restaurant.find({
        //   borough: "Brooklyn",
        //   $or: [{ cuisine: "American" }, { cuisine: "Chinese" }],
        // });

        // const getData = await Restaurant.find(
        //   {
        //     $or: [
        //       { borough: "Brooklyn" },
        //       { borough: "Manhattan" },
        //       { borough: "Bronx" },
        //     ],
        //   },
        //   { _id: 1, cuisine: 1, borough: 1 }
        // );
        // const getData = await Restaurant.find({
        //   borough: { $nin: ["Manhattan", "Bronx", "Brooklyn"] },
        // });
        // const getData = await Restaurant.find({
        //   $or: [
        //     {
        //       name: { $regex: "mor", $options: "i" },
        //     },
        //     {
        //       $and: [
        //         { cuisine: { $ne: "American" } },
        //         { cuisine: { $ne: "Chinese" } },
        //       ],
        //     },
        //   ],
        // });

        // const getData = await Restaurant.find({
        //   "grade.grade": { $eq: "A" },
        //   "grade.score": { $eq: "90" },
        //   "grade.date": "2012-03-02T00:00:00.000Z",
        // });
        // const getData = await Restaurant.find({
        //   "address.cord.1": { $gte: 42 },
        // });

        // const getData = await Restaurant.find()
        //   .sort({ cuisine: -1 })
        //   .sort({ borough: 1 });

        // const getData = await Restaurant.find({
        //   $and: [
        //     {
        //       $or: [
        //         { "grade.score": { $eq: 94 } },
        //         { "grade.score": { $eq: 95 } },
        //       ],
        //     },
        //     {
        //       borough: "Manhattan",
        //     },
        //   ],
        // });
        // const pipeline = [
        //   { $unwind: "$grade" },
        //   {
        //     $group: {
        //       _id: "$cuisine",
        //       count: { $sum: 1 },
        //       maxScore: { $max: "$grade.score" },
        //       minScore: { $min: "$grade.score" },
        //     },
        //   },
        // ];
        // const pipeline = [
        //   {
        //     $group: {
        //       _id: "$borough",
        //       count: { $sum: 1 },

        //     },
        //   },
        // ];

        // const pipeline = [
        //   {
        //     $group: {
        //       _id: {
        //         cuisine: "$cuisine",
        //         borough: "$borough",
        //       },
        //       count: { $sum: 1 },
        //     },
        //   },
        // ];
        // const pipeline = [
        //   {
        //     $unwind: "$grade",
        //   },
        //   {
        //     $match: { "grade.grade": "A" },
        //   },
        //   {
        //     $group: {
        //       _id: {
        //         cuisine: "$cuisine",
        //         borough: "$borough",
        //       },
        //       count: { $sum: 1 },
        //     },
        //   },
        // ];
        // const pipeline = [
        //   {
        //     $unwind: "$grade",
        //   },
        //   {
        //     $project: {
        //       month: {
        //         $month: {
        //           $toDate: "$grade.date",
        //         },
        //       },
        //       year: {
        //         $year: {
        //           $toDate: "$grade.date",
        //         },
        //       },
        //     },
        //   },
        //   {
        //     $group: {
        //       _id: {
        //         month: "$month",
        //         year: "$year",
        //       },
        //       count: { $sum: 1 },
        //     },
        //   },
        // ];
        const pipeline = [
          {
            $unwind: "$grade",
          },
          {
            $group: {
              _id: "$cuisine",
              maxScore: { $max: "$grade.score" },
            },
          },
        ];
        const getData = await Restaurant.aggregate(pipeline);
        if (!getData.length) return reject("Restaurant not found");
        return resolve(getData);
      } catch (error) {
        return reject(error);
      }
    });
  },
};
function ISODate(arg0: string): any {
  throw new Error("Function not implemented.");
}
