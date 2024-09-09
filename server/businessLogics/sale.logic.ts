import Sale from "../models/Sales";

export const saleLogic = {
  async createSale(input: string) {
    return new Promise(async (resolve, reject) => {
      try {
        const sale = await Sale.insertMany(input);
        if (!sale.length) return reject("Couldn't find sale");
        return resolve(sale);
      } catch (error) {
        return reject(error);
      }
    });
  },
  async getSales() {
    return new Promise(async (resolve, reject) => {
      try {
        // const pipeline = [
        //   {
        //     $group: {
        //       _id: "$item",
        //       totalAmount: { $sum: { $multiply: ["$price", "$quantity"] } },
        //     },
        //   },
        //   {
        //     $match: {
        //       totalAmount: { $gte: 4000 },
        //     },
        //   },
        // ];
        const date = new Date();
        const pipeline = [
          {
            $match: {
              $expr: {
                createdAt: { gte: new Date(date) },
              },
            },
          },
          {
            $match: {
              $expr: {
                $gte: [{ $multiply: ["$price", "$quantity"] }, 500],
              },
            },
          },
          {
            $group: {
              _id: "$item",
              quantity: { $push: "$quantity" },
              totalAmount: { $sum: { $multiply: ["$price", "$quantity"] } },
              average: { $avg: "$quantity" },
            },
          },
          {
            $sort: { totalAmount: -1 },
          },
        ];
        const sale = await Sale.aggregate(pipeline as any);
        if (!sale.length) return reject("Couldn't find sale");
        return resolve(sale);
      } catch (error) {
        return reject(error);
      }
    });
  },
};
