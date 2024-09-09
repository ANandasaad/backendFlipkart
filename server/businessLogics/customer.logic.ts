import Customer from "../models/Customer";

export const customerLogic = {
  async createCustomer(name: string, city: string) {
    return new Promise(async (resolve, reject) => {
      try {
        const create = await Customer.create({ name, city });

        return resolve(create);
      } catch (error) {
        reject(error);
      }
    });
  },
  async getCustomers() {
    return new Promise(async (resolve, reject) => {
      try {
        const pipeline = [
          {
            $group: {
              _id: "$city",
              count: { $sum: 1 },
            },
          },
          { $sort: { count: -1 } },
        ];
        const customers = await Customer.aggregate(pipeline as any);
        if (!customers.length) return reject("No customers were found");
        return resolve(customers);
      } catch (error) {
        return reject(error);
      }
    });
  },
};
