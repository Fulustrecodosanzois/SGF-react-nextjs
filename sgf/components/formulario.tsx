"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const FormPsi: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const formatPhone = (value: string): string => {
        const cleanedValue = value.replace(/\D/g, ""); // Remove caracteres não numéricos
        let formattedPhone = "";

        if (cleanedValue.length > 0) {
            formattedPhone = `(${cleanedValue.substring(0, 2)})`; // Adiciona o DDD

            if (cleanedValue.length >= 3) {
                formattedPhone += ` ${cleanedValue.substring(2, 3)}`; // Primeiro dígito
            }

            if (cleanedValue.length >= 4) {
                formattedPhone += ` ${cleanedValue.substring(3, 7)}`; // Próximos 4 dígitos
            }

            if (cleanedValue.length >= 8) {
                formattedPhone += ` ${cleanedValue.substring(7, 11)}`; // Últimos 4 dígitos
            }
        }

        return formattedPhone;
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value;
        const cleanedValue = rawValue.replace(/\D/g, "");

        // Permitir digitar até 11 números antes de aplicar a formatação
        if (cleanedValue.length <= 11) {
            const formattedPhone = formatPhone(rawValue);
            setPhone(formattedPhone);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Remover a formatação do telefone para validação
        const cleanedPhone = phone.replace(/\D/g, "");

        // Validar campos
        const newErrors = {
            name: name === "" ? "Nome é obrigatório" : "",
            email: !email.match(/^[^@]+@[^@]+\.[^@]+$/) ? "Email inválido" : "",
            phone: cleanedPhone.length !== 11 ? "Telefone inválido. Deve ter 11 dígitos." : "", // Verifica se tem 11 dígitos
            message: message.length < 10 ? "Mensagem deve ter pelo menos 10 caracteres" : "",
        };

        setErrors(newErrors);

        // Verificar se não há erros
        if (!Object.values(newErrors).some((error) => error)) {
            // Formatar a mensagem para o WhatsApp
            const mensagemFormatada = `Seja Bem Vindo(a)!%0A%0A**Informações do Contato**%0A%0A*Nome:* ${name}%0A%0A*Email:* ${email}%0A%0A*Telefone:* ${phone}%0A%0A*Mensagem:*%0A%0A${message}`;

            const numeroWhatsApp = "5598987189453"; // Número do WhatsApp

            // Criar o link para abrir o WhatsApp
            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemFormatada}`;

            // Abrir o link no navegador
            window.open(urlWhatsApp);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md space-y-4"
        >
            <div>
                <Label htmlFor="name">Nome completo</Label>
                <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Digite seu nome"
                />
                {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
            </div>

            <div>
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu email"
                />
                {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
            </div>

            <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    maxLength={16} // Limita a 15 caracteres (formatação inclusa)
                    onChange={handlePhoneChange}
                    placeholder="(99) 9 9999 9999"
                />
                {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
            </div>

            <div>
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Descreva brevemente seu motivo de contato"
                />
                {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
            </div>

            <div className="flex justify-center">
                <Button type="submit" className="w-6/12 font-bold text-white bg-blue-500">
                    Enviar
                </Button>
            </div>
        </form>
    );
};

export default FormPsi;
