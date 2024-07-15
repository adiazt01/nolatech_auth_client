import { PanelLeft } from "lucide-react";

import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { TooltipProvider } from "../components/ui/tooltip";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { useEffect, useState } from "react";
import axios from "../api/axiosConfig";
import { AsideDashboard } from "../components/AsideDashboard";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import { UserDataTable } from "../components/tables/user/UserDataTable";
import { UserColumns } from "../components/tables/user/ColumnsUser";

export function DashboardPage() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const authStore = useAuthStore((state) => state);
  const [pageSize, setPageSize] = useState(5);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchUsers(page: number, pageSize: number) {
      const response = await axios.get(`/users?page=${page + 1}&limit=${pageSize}`);
      console.log(response);
      setUsers(response.data.users);
      setTotalPages(response.data.meta.totalPages);
    }

    fetchUsers(currentPage, pageSize);
  }, [currentPage, pageSize]);

  const handlePageChange = (newPage: number) => {
    console.log(newPage);
    setCurrentPage(newPage);
  };

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
                <DropdownMenuItem
                  onClick={() => {
                    authStore.logout();
                    navigate("/");
                  }}
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>
          <main className="flex flex-col relative items-start gap-4 p-4">
            <h2 className="text-2xl font-semibold">Usuarios registrados</h2>
            <UserDataTable
              columns={UserColumns}
              data={users}
              totalPages={totalPages}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
