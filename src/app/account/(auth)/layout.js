import { Inter } from "next/font/google";
import NextAuthSessionProvider from "../../provider/NextAuthSessionProvider";
import { getServerSession } from "next-auth";
import authOptions from "../../api/auth/[...nextauth]/authOptions";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "123333JBL Store Thailand 123456",
  description:
    "778899 Get the best sound for your entertainment needs with JBL speakers, headphones & audio systems. Check out our full range of products at JBL Thailand now.",
};

export default async function AuthLayout({ children }) {
    const session = await getServerSession(authOptions)
    
  return (
    <main id="main-content">
      <NextAuthSessionProvider user={session} >{children}</NextAuthSessionProvider>
    </main>
  );
}
