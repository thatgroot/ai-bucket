// pages/auth.tsx
import React from "react";
import { Card, CardContent } from "../../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import { Button } from "../../../components/ui/button";

import LoginForm from "./login";
import RegisterForm from "./register";

const Auth: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex justify-center items-start min-h-screen">
      <div className="w-full max-w-md flex flex-col gap-4">
        <Tabs defaultValue="login">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <React.Suspense fallback={<div>Loading...</div>}>
              <LoginForm />
            </React.Suspense>
          </TabsContent>
          <TabsContent value="register">
            <React.Suspense fallback={<div>Loading...</div>}>
              <RegisterForm />
            </React.Suspense>
          </TabsContent>
        </Tabs>
        <Card>
          <CardContent className="pt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <Button variant="outline">
                <svg
                  className="mr-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.70492L1.275 6.60992C0.46 8.22992 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                    fill="#34A853"
                  />
                </svg>
                Google
              </Button>
              <Button variant="outline">
                <svg
                  className="mr-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M9.09858 24H0.974878V7.97657H9.09858V24ZM5.03403 5.79687C2.83732 5.79687 1.06201 4.48438 1.06201 2.89219C1.06201 1.3 2.83732 0 5.03403 0C7.20606 0 9.00605 1.3 8.99605 2.89219C8.99605 4.48438 7.20606 5.79687 5.03403 5.79687ZM24 24H15.881V15.3473C15.881 13.3156 15.4406 11.9687 13.6629 11.9687C12.2712 11.9687 11.506 12.9531 11.1866 13.8594C11.0616 14.1906 11.04 14.6719 11.04 15.1531V24H2.92188C2.92188 24 3.03055 8.03516 2.92188 7.97657H11.04V10.4961C11.9281 9.21875 13.2344 7.47812 16.2713 7.47812C19.7599 7.47812 24 9.92188 24 15.1531V24Z"
                    fill="#1877F2"
                  />
                </svg>
                LinkedIn
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
