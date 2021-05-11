import bcrypt from 'bcryptjs';
import moment from 'moment';
import { config } from '../../config';
import Users from '../../entity/Users';
import { AddUserDto } from "../../dto/user/addUserDto";

export const insertUser = async (addUserDto: AddUserDto) => {
   
    const isExists = await usernameExists(addUserDto.email);
    if(isExists)
        throw 'User already exists';
    const hashedPassword = await bcrypt.hash(addUserDto.password, bcrypt.genSaltSync(10));
    const user = new Users();
    user.fullName = addUserDto.fullName;
    user.email = addUserDto.email;
    user.password = hashedPassword;
    const savedUser = await user.save();
};

export const usernameExists = async (username: string): Promise<boolean> => {
    const alreadyExists = await Users.findOne({ username });
    return alreadyExists ? true : false;
};