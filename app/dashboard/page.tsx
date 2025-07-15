import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { auth } from "@/auth";
import { getCookies } from "@/utils/getCookies";

export default async function UserAvatar() {
  const session = await auth();
  if (!session) {
    return <div className='text-red-500'>Authentication error: No session found</div>;
  }
  const user = session.user;

  // const token = await getCookies()
  // const res = await fetch("http://localhost:4000", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${token}`,
  //   },
  // });
  // const data = await res.json();
  // console.log("Server response:", data);
  return (
    <Card className='max-w-sm shadow-sm shadow-gray-400 border border-muted bg-background'>
      <CardHeader className='flex items-center space-y-2'>
        <Avatar className='w-16 h-16'>
          <AvatarImage src={user?.image ?? ""} />
          <AvatarFallback>{user?.name?.[0] ?? "U"}</AvatarFallback>
        </Avatar>
        <CardTitle className='text-center text-xl font-bold'>{user?.name}</CardTitle>
      </CardHeader>
      <CardContent className='text-sm space-y-1 text-muted-foreground'>
        <p>
          <span className='font-medium text-foreground'>Email:</span> {user?.email}
        </p>
        <p>
          <span className='font-medium text-foreground'>Session Expires:</span>
          <br />
          {new Date(session.expires).toLocaleString()}
        </p>
      </CardContent>
    </Card>
  );
}
