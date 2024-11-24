import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectMongoDp } from "../../../lib/mongodp";
import User from "../../../models/user";

export const POST = async (req) => {
  try {
    const { fullName, email, userName, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);

    await connectMongoDp();

    const userExist = await User.findOne({ email });

    if (userExist) {
      console.log(userExist);
      throw Error("user already exist");
    }

    await User.create({
      fullName,
      email,
      userName,
      password: hashedPassword,
    });

    return NextResponse.json({ message: "user registered" }, { status: 201 });
  } catch (error) {
    console.log(error.message);

    return NextResponse.json(
      { message: error.message, error },
      { status: 500 }
    );
  }
};
