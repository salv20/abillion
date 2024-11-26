import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import SignupForm from "../components/SignupForm";

const Page = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/products");
  return <SignupForm />;
};

export default Page;
