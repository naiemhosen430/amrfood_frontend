"use client";
import React, { useContext, useState } from "react";
import { TextField, Button, Typography, Paper, Container } from "@mui/material";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { postApiCall } from "@/api/fatchData";
import { setCookie } from "cookies-next";
import { AuthContex } from "@/context/AuthContex";
import { useRouter } from "next/navigation";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(AuthContex);
  const router = useRouter();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await postApiCall(`auth/login`, data);
      if (response?.statusCode === 200) {
        setCookie("accesstoken", response?.token);
        dispatch({ type: "ADD_AUTH_DATA", payload: response?.data || null });
        router.push("/dashboard", { scroll: true });
      } else {
      }
    } catch (error) {
      console.log("Error during registration:", error);
      setErrorMessage(error?.message);
      // Manage error state
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} className="p-6 rounded-lg">
        <Typography variant="h5" className="mb-4 text-center">
          Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            type="email"
            {...register("email", { required: true })} // Use register here
            error={!!errors.email}
            helperText={errors.email ? "Email is required" : ""}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            {...register("password", { required: true })} // Use register here
            error={!!errors.password}
            helperText={errors.password ? "Password is required" : ""}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="mt-4"
          >
            Login
          </Button>
        </form>
        <Typography variant="body2" className="mt-2 text-center">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-600">
            Register
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
}
