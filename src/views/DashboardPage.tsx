import {
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Input } from "../components/ui/input";
import { TooltipProvider } from "../components/ui/tooltip";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { useEffect, useState } from "react";
import axios from "../api/axiosConfig";
import { AsideDashboard } from "../components/AsideDashboard";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

export function DashboardPage() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const authStore = useAuthStore((state) => state);

  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get("/users");
      setUsers(response.data);
    }

    fetchUsers();
  }, []);

  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <AsideDashboard />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <header className="sticky top-0 z-30 flex h-14 justify-end items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="white" className="sm:hidden">
                  <PanelLeft className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="sm:max-w-xs">
                <nav className="grid gap-6 text-lg font-medium"></nav>
              </SheetContent>
            </Sheet>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="overflow-hidden rounded-full"
                >
                  <img
                    src={`https://robohash.org/${Math.random()}`}
                    width={36}
                    height={36}
                    alt="Avatar"
                    className="overflow-hidden rounded-full"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => {
                  authStore.logout()
                  navigate("/")
                  }}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>
          <main className="grid flex-1 items-start gap-4 p-4">
            <div className="grid auto-rows-max items-start gap-4">
              <div>
                <div>
                  <Card>
                    <CardHeader className="px-7">
                      <CardTitle>Usuarios registrados</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="table-cell">Nombre</TableHead>
                            <TableHead className="table-cell">Email</TableHead>
                            <TableHead className="md:table-cell hidden">
                              Password
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {users.map((user) => (
                            <TableRow key={user._id}>
                              <TableCell className="table-cell">
                                {user.username}
                              </TableCell>
                              <TableCell className="table-cell">
                                {user.email}
                              </TableCell>
                              <TableCell className="truncate hidden md:table-cell">
                                {user.password}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            <div></div>
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
