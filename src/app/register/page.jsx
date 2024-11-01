"use client";
import React, { useContext, useState } from "react";
import { TextField, Button, Typography, Container, Paper } from "@mui/material";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { AuthContex } from "@/context/AuthContex"; // Ensure the context is correctly defined
import { postApiCall } from "@/api/fatchData";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { dispatch } = useContext(AuthContex);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await postApiCall(`auth/register`, data);
      if (response?.statusCode === 200) {
        setCookie("accesstoken", response?.token);
        dispatch({ type: "ADD_AUTH_DATA", payload: response?.data || null });
        router.push("/dashboard", { scroll: true });
      } else {
        // Handle non-200 responses
      }
    } catch (error) {
      console.error("Error during registration:", error);
      // Manage error state
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} className="p-6 rounded-lg">
        <Typography component="h1" variant="h5" className="mb-4 text-center">
          Register
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            {...register("name", { required: true })}
            error={!!errors.name}
            helperText={errors.name ? "Name is required" : ""}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Phone"
            type="tel"
            {...register("phone", { required: true })}
            error={!!errors.phone}
            helperText={errors.phone ? "Phone is required" : ""}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            type="email"
            {...register("email", { required: true })}
            error={!!errors.email}
            helperText={errors.email ? "Email is required" : ""}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            {...register("password", { required: true })}
            error={!!errors.password}
            helperText={errors.password ? "Password is required" : ""}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Location"
            {...register("location", { required: true })}
            error={!!errors.location}
            helperText={errors.location ? "Location is required" : ""}
          />
          <div className="mt-4">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </Button>
          </div>
          <Typography variant="body2" className="mt-2 text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600">
              Login
            </Link>
          </Typography>
        </form>
      </Paper>
    </Container>
  );
}
