import { auth } from "../../auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;
  console.log(session);
  const user = session.user;
  return (
    <div>
      <Card className='max-w-sm shadow-sm shadow-gray-400 border border-muted bg-background'>
        <CardHeader className='flex items-center space-y-2'>
          <Avatar className='w-16 h-16'>
            <AvatarImage src={user.image} />
            <AvatarFallback>{user.name?.[0] ?? "U"}</AvatarFallback>
          </Avatar>
          <CardTitle className='text-center text-xl font-bold'>{user.name}</CardTitle>
        </CardHeader>
        <CardContent className='text-sm space-y-1 text-muted-foreground'>
          <p>
            <span className='font-medium text-foreground'>Email:</span> {user.email}
          </p>
          <p>
            <span className='font-medium text-foreground'>Session Expires:</span>
            <br /> {new Date(user.expires).toLocaleString()}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
