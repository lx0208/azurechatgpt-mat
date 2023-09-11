import { Card } from "@/components/ui/card";
import { NewChat } from "@/features/chat/chat-menu/new-chat";
import { FindAllChatThreadForCurrentUser } from "@/features/chat/chat-thread-service";
import { redirect } from "next/navigation";
import { userSession } from "@/features/auth/helpers";

export default async function Home() {
  const chats = await FindAllChatThreadForCurrentUser();
  const user = await userSession();
  console.log("user111",user)
  if (chats.length > 0) {
    redirect(`/chat/${chats[0].id}`);
  }

  return (
    <Card className="h-full items-center flex justify-center">
      <NewChat></NewChat>
    </Card>
  );
}
