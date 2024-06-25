import { Button } from "@/components/button"
import { DiscordIcon, GitHubIcon } from "@/components/icons"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
          <Image src="/logo.png" alt="logo" width={64} height={64} />

          <div className="flex flex-col w-8/12 lg:w-6/12 gap-2">
            <h1 className="font-bold text-5xl text-center lg:text-left">
              simple.ts
            </h1>
            <p className="text-center lg:text-left md:text-balance">
              Simple and Easy-to-use Discord Bot written in TypeScript for music
              playback with multiple platform support.
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          <Button href="https://discord.com/oauth2/authorize?client_id=887384789483679744">
            <DiscordIcon size={20} />
            Invite
          </Button>

          <Button href="https://github.com/heapybruh/simple.ts">
            <GitHubIcon size={20} />
            Repository
          </Button>
        </div>
      </div>
    </main>
  )
}
