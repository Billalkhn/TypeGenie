import bcryptjs from "bcryptjs";
import { config } from "../../config";
import Users from "../../entity/Users";

export const loginUser = async (email: string, password: string) => {
  const user = await Users.findOne({ email });
  if (!user) throw "user doesnot exists";

  const dePassword = await bcryptjs.compare(password, user.password);

  if (!dePassword) throw "username of password doesnot match";
};
