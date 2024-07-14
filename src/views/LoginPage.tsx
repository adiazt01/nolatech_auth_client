import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { authLoginFormSchema } from "../schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "../api/axiosConfig";
import { AxiosError } from "axios";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "../components/ui/form";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

interface AxiosErrorResponse {
  message: string;
}

export function LoginPage() {
  const navigate = useNavigate();
  const { setIsAuthenticated, setUserInformation } = useAuthStore(
    (state) => state
  );

  const form = useForm<z.infer<typeof authLoginFormSchema>>({
    resolver: zodResolver(authLoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof authLoginFormSchema>) {
    try {
      const res = await axios.post("/auth/login", data);

      if (res.status === 200) {
        setIsAuthenticated(true);
        setUserInformation({
          username: res.data.username,
          email: res.data.email,
        });
        navigate("/dashboard");
      }
    } catch (error) {
      setIsAuthenticated(false);
      const axiosError = error as AxiosError<AxiosErrorResponse>;
      if (axiosError.response && axiosError.response.data.message) {
        form.setError("root", {
          type: "manual",
          message: axiosError.response.data.message,
        });
      } else {
        form.setError("root", {
          type: "manual",
          message: "An unexpected error occurred",
        });
      }
    }
  }

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <Form {...form}>
            <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="email"
                  disabled={form.formState.isSubmitting}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="example@email.com" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  disabled={form.formState.isSubmitting}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="*****" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                disabled={form.formState.isSubmitting}
                type="submit"
                className="w-full"
              >
                {form.formState.isSubmitting ? (
                  <svg
                    className="animate-spin h-5 w-5 ml-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 014.709 11H2c0 3.042 1.135 5.824 3 7.938l1-1.647z"
                    ></path>
                  </svg>
                ) : (
                  "Register"
                )}
              </Button>
              {form.formState.errors.root && (
                <p className="text-center text-red-500">
                  {form.formState.errors.root.message}
                </p>
              )}
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="#" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
