import { cookies } from "next/headers";

export const getCookies = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get("authjs.session-token")?.value;
    return token;
  };
  