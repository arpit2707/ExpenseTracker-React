import React from "react";
import { useForm } from "react-hook-form";

const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
};
