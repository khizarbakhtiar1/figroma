import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export function InstituteDashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <div className="flex-1 md:grow-0">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold"
            prefetch={false}
          >
            <Package2Icon className="h-6 w-6 text-primary" />
            <span>Institute Dashboard</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 text-sm font-medium">
            <CoinsIcon className="h-4 w-4" />
            <span>Credits: 500</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium">
            <BuildingIcon className="h-4 w-4" />
            <span>Higher Authority: Acme University</span>
          </div>
          <Button className="h-8 gap-2 text-sm">
            <PlusIcon className="h-4 w-4" />
            Submit Document Request
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <img
                  src="/placeholder.svg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                  style={{ aspectRatio: "36/36", objectFit: "cover" }}
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Approved Documents</CardTitle>
            <CardDescription>
              View and manage your approved documents.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Document Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    Degree Certificate
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">Approved</Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" className="h-7 gap-1 text-sm">
                      <CoinsIcon className="h-4 w-4" />
                      Mint Soul Bound Token
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Transcript</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Approved</Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" className="h-7 gap-1 text-sm">
                      <CoinsIcon className="h-4 w-4" />
                      Mint Soul Bound Token
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Recommendation Letter
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">Approved</Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" className="h-7 gap-1 text-sm">
                      <CoinsIcon className="h-4 w-4" />
                      Mint Soul Bound Token
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Internship Certificate
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">Approved</Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" className="h-7 gap-1 text-sm">
                      <CoinsIcon className="h-4 w-4" />
                      Mint Soul Bound Token
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Minted Soul Bound Tokens</CardTitle>
            <CardDescription>
              View and manage your minted soul bound tokens.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Document Name</TableHead>
                  <TableHead>Token ID</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    Degree Certificate
                  </TableCell>
                  <TableCell>0x123456789abcdef</TableCell>
                  <TableCell>
                    <Button
                      variant="danger"
                      size="sm"
                      className="h-7 gap-1 text-sm"
                    >
                      <TrashIcon className="h-4 w-4" />
                      Revoke Token
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Transcript</TableCell>
                  <TableCell>0x987654321fedcba</TableCell>
                  <TableCell>
                    <Button
                      variant="danger"
                      size="sm"
                      className="h-7 gap-1 text-sm"
                    >
                      <TrashIcon className="h-4 w-4" />
                      Revoke Token
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Recommendation Letter
                  </TableCell>
                  <TableCell>0xabcdef1234567890</TableCell>
                  <TableCell>
                    <Button
                      variant="danger"
                      size="sm"
                      className="h-7 gap-1 text-sm"
                    >
                      <TrashIcon className="h-4 w-4" />
                      Revoke Token
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Purchase Credits</CardTitle>
            <CardDescription>
              Select a plan to purchase additional credits.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>100 Credits</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">$10</div>
                </CardContent>
                <CardFooter>
                  <Button variant="primary-foreground">Purchase</Button>
                </CardFooter>
              </Card>
              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>500 Credits</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">$50</div>
                </CardContent>
                <CardFooter>
                  <Button variant="primary-foreground">Purchase</Button>
                </CardFooter>
              </Card>
              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>1000 Credits</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">$100</div>
                </CardContent>
                <CardFooter>
                  <Button variant="primary-foreground">Purchase</Button>
                </CardFooter>
              </Card>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

function BuildingIcon(props) {
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
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function CoinsIcon(props) {
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
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="m16.71 13.88.7.71-2.82 2.82" />
    </svg>
  );
}

function Package2Icon(props) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
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
  );
}

function TrashIcon(props) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
