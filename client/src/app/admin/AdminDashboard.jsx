"use client";

import { useState } from "react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
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

export function AdminDashboard() {
  const [approvedRequests, setApprovedRequests] = useState([]);
  const [isAdminView, setIsAdminView] = useState(false);
  const [admins, setAdmins] = useState([
    { id: "ADMIN-001", name: "John Doe" },
    { id: "ADMIN-002", name: "Jane Smith" },
    { id: "ADMIN-003", name: "Michael Johnson" },
  ]);
  const [newAdminName, setNewAdminName] = useState("");
  const handleApprove = (request) => {
    setApprovedRequests([...approvedRequests, request]);
  };
  const handleAddAdmin = () => {
    if (newAdminName.trim() !== "") {
      setAdmins([
        ...admins,
        { id: `ADMIN-${admins.length + 1}`, name: newAdminName },
      ]);
      setNewAdminName("");
    }
  };
  const handleRemoveAdmin = (admin) => {
    setAdmins(admins.filter((a) => a.id !== admin.id));
  };
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Link
              href="#"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
              prefetch={false}
            >
              <div className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <div className="h-5 w-5" />
                  <span className="sr-only">Dashboard</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Dashboard</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <div className="h-5 w-5" />
                  <span className="sr-only">Approvals</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Approvals</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <div className="h-5 w-5" />
                  <span className="sr-only">Users</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Users</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <div className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <div className="h-5 w-5" />
                  <span className="sr-only">Logout</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Logout</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <div className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                  prefetch={false}
                >
                  <div className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <div className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-foreground"
                  prefetch={false}
                >
                  <div className="h-5 w-5" />
                  Approvals
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <div className="h-5 w-5" />
                  Users
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <div className="h-5 w-5" />
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-4">
            <Button
              variant={isAdminView ? "outline" : "ghost"}
              onClick={() => setIsAdminView(false)}
            >
              Higher Authority Approvals
            </Button>
            <Button
              variant={isAdminView ? "ghost" : "outline"}
              onClick={() => setIsAdminView(true)}
            >
              Admin Management
            </Button>
          </div>
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#" prefetch={false}>
                    Dashboard
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>
                  {isAdminView ? "Admin Management" : "Approvals"}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative ml-auto flex-1 md:grow-0">
            <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
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
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {!isAdminView ? (
            <Card className="w-full">
              <CardHeader className="px-7">
                <CardTitle>Pending Higher Authority Approvals</CardTitle>
                <CardDescription>
                  Review and approve pending requests from the Higher Authority.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Request ID</TableHead>
                      <TableHead>Requested By</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>
                        <span className="sr-only">Actions</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "REQ-001",
                        requestedBy: "John Doe",
                        description: "Increase daily withdrawal limit",
                        status: "Pending",
                      },
                      {
                        id: "REQ-002",
                        requestedBy: "Jane Smith",
                        description: "Add new token to the platform",
                        status: "Pending",
                      },
                      {
                        id: "REQ-003",
                        requestedBy: "Michael Johnson",
                        description: "Modify platform fees",
                        status: "Pending",
                      },
                      {
                        id: "REQ-004",
                        requestedBy: "Emily Davis",
                        description: "Add new user role",
                        status: "Pending",
                      },
                    ].map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">
                          {request.id}
                        </TableCell>
                        <TableCell>{request.requestedBy}</TableCell>
                        <TableCell>{request.description}</TableCell>
                        <TableCell>
                          <Badge variant="outline">Pending</Badge>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            className="bg-[#3B82F6] text-white hover:bg-[#2563EB] focus:ring-[#3B82F6]"
                            onClick={() => handleApprove(request)}
                          >
                            Approve
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4 w-full">
              <Card className="w-full">
                <CardHeader className="px-7">
                  <CardTitle>Admin Management</CardTitle>
                  <CardDescription>
                    Add and remove administrators for the platform.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-2">
                      <Input
                        value={newAdminName}
                        onChange={(e) => setNewAdminName(e.target.value)}
                        placeholder="New Admin Name"
                        className="flex-1"
                      />
                      <Button onClick={handleAddAdmin}>Add Admin</Button>
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Admin ID</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>
                            <span className="sr-only">Actions</span>
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {admins.map((admin) => (
                          <TableRow key={admin.id}>
                            <TableCell className="font-medium">
                              {admin.id}
                            </TableCell>
                            <TableCell>{admin.name}</TableCell>
                            <TableCell>
                              <Button
                                variant="outline"
                                className="bg-[#EF4444] text-white hover:bg-[#DC2626] focus:ring-[#EF4444]"
                                onClick={() => handleRemoveAdmin(admin)}
                              >
                                Remove
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
              {approvedRequests.length > 0 && (
                <Card className="w-full">
                  <CardHeader className="px-7">
                    <CardTitle>Approved Higher Authority Requests</CardTitle>
                    <CardDescription>
                      View the list of approved requests from the Higher
                      Authority.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Request ID</TableHead>
                          <TableHead>Requested By</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {approvedRequests.map((request) => (
                          <TableRow key={request.id}>
                            <TableCell className="font-medium">
                              {request.id}
                            </TableCell>
                            <TableCell>{request.requestedBy}</TableCell>
                            <TableCell>{request.description}</TableCell>
                            <TableCell>
                              <Badge variant="secondary">Approved</Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
