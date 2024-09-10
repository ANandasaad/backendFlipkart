import bcrypt from "bcrypt";

export const HashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);

  const hashed = await bcrypt.hash(password, salt);
  return hashed;
};

export const ComparePassword = async (
  password: string,
  originalPassword: string
) => {
  const compare = await bcrypt.compare(password, originalPassword);

  return compare;
};
