import Link from "next/link"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background border-b sticky top-0 z-40">
        <div className="container px-4 md:px-6 flex items-center justify-between h-16">
          <Link href="#" className="flex items-center gap-2 text-lg font-bold" prefetch={false}>
            <DiamondIcon className="w-6 h-6" />
            <span>Crypto Artistry</span>
          </Link>
          <div className="flex items-center gap-4">
            <form className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon className="w-5 h-5 text-muted-foreground" />
              </div>
              <Input
                type="search"
                placeholder="Search NFTs..."
                className="w-full rounded-lg bg-muted pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              />
            </form>
            <Link
              href="#"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
              prefetch={false}
            >
              <PlusIcon className="w-5 h-5" />
              Create
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <img
                    src="/placeholder.svg"
                    width={36}
                    height={36}
                    alt="Avatar"
                    className="rounded-full"
                    style={{ aspectRatio: "36/36", objectFit: "cover" }}
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="#" prefetch={false}>
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" prefetch={false}>
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" prefetch={false}>
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Discover, Collect, and Sell Digital Art</h1>
                <p className="text-muted-foreground text-lg">
                  Explore a vast collection of unique digital assets and invest in the future of art.
                </p>
                <div className="flex gap-2">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
                    prefetch={false}
                  >
                    <CompassIcon className="w-5 h-5" />
                    Explore
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-background text-primary font-medium text-sm hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
                    prefetch={false}
                  >
                    <PlusIcon className="w-5 h-5" />
                    Create
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <img
                  src="/placeholder.svg"
                  width={600}
                  height={600}
                  alt="Featured NFT"
                  className="rounded-2xl"
                  style={{ aspectRatio: "600/600", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Featured Collections</h2>
              <Link href="#" className="text-primary hover:underline hover:underline-offset-2" prefetch={false}>
                View all
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="#" className="group rounded-2xl overflow-hidden" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={300}
                  alt="Collection Cover"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  style={{ aspectRatio: "300/300", objectFit: "cover" }}
                />
                <div className="p-4 bg-background">
                  <h3 className="text-lg font-bold">Crypto Punks</h3>
                  <p className="text-muted-foreground text-sm">10,000 unique digital collectibles</p>
                </div>
              </Link>
              <Link href="#" className="group rounded-2xl overflow-hidden" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={300}
                  alt="Collection Cover"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  style={{ aspectRatio: "300/300", objectFit: "cover" }}
                />
                <div className="p-4 bg-background">
                  <h3 className="text-lg font-bold">Bored Ape Yacht Club</h3>
                  <p className="text-muted-foreground text-sm">10,000 unique digital collectibles</p>
                </div>
              </Link>
              <Link href="#" className="group rounded-2xl overflow-hidden" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={300}
                  alt="Collection Cover"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  style={{ aspectRatio: "300/300", objectFit: "cover" }}
                />
                <div className="p-4 bg-background">
                  <h3 className="text-lg font-bold">CryptoKitties</h3>
                  <p className="text-muted-foreground text-sm">10,000 unique digital collectibles</p>
                </div>
              </Link>
              <Link href="#" className="group rounded-2xl overflow-hidden" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={300}
                  alt="Collection Cover"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  style={{ aspectRatio: "300/300", objectFit: "cover" }}
                />
                <div className="p-4 bg-background">
                  <h3 className="text-lg font-bold">Art Blocks</h3>
                  <p className="text-muted-foreground text-sm">10,000 unique digital collectibles</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Trending NFTs</h2>
              <Link href="#" className="text-primary hover:underline hover:underline-offset-2" prefetch={false}>
                View all
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="#" className="group rounded-2xl overflow-hidden" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={300}
                  alt="NFT Image"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  style={{ aspectRatio: "300/300", objectFit: "cover" }}
                />
                <div className="p-4 bg-background">
                  <h3 className="text-lg font-bold">Crypto Punk #1234</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-muted-foreground text-sm">0.5 ETH</p>
                    <Button size="sm" variant="outline">
                      Buy
                    </Button>
                  </div>
                </div>
              </Link>
              <Link href="#" className="group rounded-2xl overflow-hidden" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={300}
                  alt="NFT Image"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  style={{ aspectRatio: "300/300", objectFit: "cover" }}
                />
                <div className="p-4 bg-background">
                  <h3 className="text-lg font-bold">Bored Ape #5678</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-muted-foreground text-sm">2 ETH</p>
                    <Button size="sm" variant="outline">
                      Buy
                    </Button>
                  </div>
                </div>
              </Link>
              <Link href="#" className="group rounded-2xl overflow-hidden" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={300}
                  alt="NFT Image"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  style={{ aspectRatio: "300/300", objectFit: "cover" }}
                />
                <div className="p-4 bg-background">
                  <h3 className="text-lg font-bold">CryptoKitty #9012</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-muted-foreground text-sm">0.2 ETH</p>
                    <Button size="sm" variant="outline">
                      Buy
                    </Button>
                  </div>
                </div>
              </Link>
              <Link href="#" className="group rounded-2xl overflow-hidden" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={300}
                  alt="NFT Image"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  style={{ aspectRatio: "300/300", objectFit: "cover" }}
                />
                <div className="p-4 bg-background">
                  <h3 className="text-lg font-bold">Art Blocks #3456</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-muted-foreground text-sm">1 ETH</p>
                    <Button size="sm" variant="outline">
                      Buy
                    </Button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted border-t">
        <div className="container px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 text-lg font-bold">
            <DiamondIcon className="w-6 h-6" />
            <span>Crypto Artistry</span>
          </div>
          <nav className="flex gap-4 md:gap-6 text-sm">
            <Link href="#" className="hover:underline hover:underline-offset-2" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="hover:underline hover:underline-offset-2" prefetch={false}>
              Explore
            </Link>
            <Link href="#" className="hover:underline hover:underline-offset-2" prefetch={false}>
              Create
            </Link>
            <Link href="#" className="hover:underline hover:underline-offset-2" prefetch={false}>
              Dashboard
            </Link>
            <Link href="#" className="hover:underline hover:underline-offset-2" prefetch={false}>
              About
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function CompassIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}


function DiamondIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}