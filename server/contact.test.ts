import { describe, expect, it } from "vitest";
import { z } from "zod";

// Mirror the contact form schema from the frontend
const contactSchema = z.object({
  nombre: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede exceder 100 caracteres"),
  email: z
    .string()
    .email("Ingresa un correo electrónico válido"),
  empresa: z
    .string()
    .max(100, "El nombre de la empresa no puede exceder 100 caracteres")
    .optional()
    .or(z.literal("")),
  telefono: z
    .string()
    .max(20, "El teléfono no puede exceder 20 caracteres")
    .optional()
    .or(z.literal("")),
  mensaje: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(2000, "El mensaje no puede exceder 2000 caracteres"),
});

describe("Contact Form Validation", () => {
  it("accepts valid complete form data", () => {
    const result = contactSchema.safeParse({
      nombre: "Juan Pablo",
      email: "juan@empresa.com",
      empresa: "Mi Empresa S.A.S.",
      telefono: "+57 323 581 2748",
      mensaje: "Me interesa una consultoría sobre eCommerce para mi empresa.",
    });
    expect(result.success).toBe(true);
  });

  it("accepts valid form data with optional fields empty", () => {
    const result = contactSchema.safeParse({
      nombre: "María García",
      email: "maria@test.com",
      empresa: "",
      telefono: "",
      mensaje: "Quiero saber más sobre sus servicios de transformación digital.",
    });
    expect(result.success).toBe(true);
  });

  it("rejects empty nombre", () => {
    const result = contactSchema.safeParse({
      nombre: "",
      email: "test@test.com",
      mensaje: "Este es un mensaje de prueba válido.",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      const nameError = result.error.issues.find(
        (i) => i.path[0] === "nombre"
      );
      expect(nameError).toBeDefined();
    }
  });

  it("rejects nombre with only 1 character", () => {
    const result = contactSchema.safeParse({
      nombre: "J",
      email: "test@test.com",
      mensaje: "Este es un mensaje de prueba válido.",
    });
    expect(result.success).toBe(false);
  });

  it("rejects invalid email format", () => {
    const result = contactSchema.safeParse({
      nombre: "Juan Pablo",
      email: "no-es-un-email",
      mensaje: "Este es un mensaje de prueba válido.",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      const emailError = result.error.issues.find(
        (i) => i.path[0] === "email"
      );
      expect(emailError).toBeDefined();
    }
  });

  it("rejects empty email", () => {
    const result = contactSchema.safeParse({
      nombre: "Juan Pablo",
      email: "",
      mensaje: "Este es un mensaje de prueba válido.",
    });
    expect(result.success).toBe(false);
  });

  it("rejects mensaje shorter than 10 characters", () => {
    const result = contactSchema.safeParse({
      nombre: "Juan Pablo",
      email: "juan@test.com",
      mensaje: "Hola",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      const msgError = result.error.issues.find(
        (i) => i.path[0] === "mensaje"
      );
      expect(msgError).toBeDefined();
    }
  });

  it("rejects mensaje longer than 2000 characters", () => {
    const result = contactSchema.safeParse({
      nombre: "Juan Pablo",
      email: "juan@test.com",
      mensaje: "A".repeat(2001),
    });
    expect(result.success).toBe(false);
  });

  it("rejects nombre longer than 100 characters", () => {
    const result = contactSchema.safeParse({
      nombre: "A".repeat(101),
      email: "juan@test.com",
      mensaje: "Este es un mensaje de prueba válido.",
    });
    expect(result.success).toBe(false);
  });

  it("accepts mensaje with exactly 10 characters", () => {
    const result = contactSchema.safeParse({
      nombre: "Juan Pablo",
      email: "juan@test.com",
      mensaje: "1234567890",
    });
    expect(result.success).toBe(true);
  });

  it("accepts nombre with exactly 2 characters", () => {
    const result = contactSchema.safeParse({
      nombre: "JP",
      email: "jp@test.com",
      mensaje: "Consulta sobre servicios digitales.",
    });
    expect(result.success).toBe(true);
  });
});
