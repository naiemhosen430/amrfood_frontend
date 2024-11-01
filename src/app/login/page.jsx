"use client";
import React from "react";
import { TextField, Button, Typography, Paper, Container } from "@mui/material";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function Page() {
  const {
    register, // Change this from login to register
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Call your API for login
    console.log("Login data:", data);
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
