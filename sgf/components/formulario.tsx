"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

const FormPsi: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("Form Data:", data);
        alert("Formulário enviado com sucesso!");
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md space-y-4"
        >
            <div>
                <Label htmlFor="name">Nome completo</Label>
                <Input
                    id="name"
                    placeholder="Digite seu nome"
                    {...register("name", { required: "Nome é obrigatório" })}
                />
                {errors.name && (
                    <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
                )}
            </div>

            <div>
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="Digite seu email"
                    {...register("email", {
                        required: "Email é obrigatório",
                        pattern: {
                            value: /^[^@]+@[^@]+\.[^@]+$/,
                            message: "Email inválido",
                        },
                    })}
                />
                {errors.email && (
                    <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
                )}
            </div>

            <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input
                    id="phone"
                    type="tel"
                    placeholder="(99) 99999-9999"
                    {...register("phone", {
                        required: "Telefone é obrigatório",
                        pattern: {
                            value: /^\(\d{2}\) \d{4,5}-\d{4}$/,
                            message: "Formato de telefone inválido",
                        },
                    })}
                />
                {errors.phone && (
                    <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
                )}
            </div>

            <div>
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                    id="message"
                    placeholder="Descreva brevemente seu motivo de contato"
                    {...register("message", {
                        required: "Mensagem é obrigatória",
                        minLength: {
                            value: 10,
                            message: "Mensagem deve ter pelo menos 10 caracteres",
                        },
                    })}
                />
                {errors.message && (
                    <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>
                )}
            </div>

            <div className="flex justify-center">
                <Button
                    type="submit"
                    className="w-6/12 font-bold text-white bg-blue-500"
                >
                    Enviar
                </Button>
            </div>

        </form>
    );
};

export default FormPsi;
