import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

import LoginForm from "../../components/LoginForm.jsx";

const Page = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/products");
  return <LoginForm />;
};

export default Page;
