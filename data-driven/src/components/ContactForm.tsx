'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';

// Schema de validación con Zod
const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres').max(80, 'El nombre debe tener máximo 80 caracteres'),
  company: z.string().max(80, 'La empresa debe tener máximo 80 caracteres').optional(),
  email: z.string().email('Email inválido'),
  phone: z.string().max(30, 'El teléfono debe tener máximo 30 caracteres').optional(),
  message: z.string().min(5, 'El mensaje debe tener al menos 5 caracteres').max(2000, 'El mensaje debe tener máximo 2000 caracteres'),
  website: z.string().optional(), // Honeypot
});

type ContactFormData = z.infer<typeof contactSchema>;

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

// Número de WhatsApp de la empresa (mismo del botón flotante y el footer)
const WHATSAPP_NUMBER = '528118019331';

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    // Verificar honeypot
    if (data.website) {
      console.log('Bot detected, form submission blocked');
      return;
    }

    // Armar el mensaje para WhatsApp con los datos del formulario
    const header = [
      `Hola, soy ${data.name}.`,
      data.company ? `Empresa: ${data.company}` : null,
      `Email: ${data.email}`,
      data.phone ? `Teléfono: ${data.phone}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    const text = encodeURIComponent(`${header}\n\n${data.message}`);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

    // Abrir WhatsApp; si el navegador bloquea la pestaña nueva, redirigir en la misma
    const win = window.open(url, '_blank', 'noopener,noreferrer');
    if (!win) {
      window.location.href = url;
    }

    setIsSuccess(true);
    reset();

    // Ocultar mensaje de éxito después de 6 segundos
    setTimeout(() => {
      setIsSuccess(false);
    }, 6000);
  };

  return (
    <motion.div 
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="mx-auto max-w-3xl"
    >
      <div className="rounded-3xl border border-[#E5E5EA] bg-white/92 p-12 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)]">
        <h3 className="mb-6 text-center text-3xl font-semibold tracking-tight text-[#0B0B0B]">
          ¿Listo para Transformar Tu Negocio?
        </h3>

        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 rounded-2xl border border-[#34C759]/30 bg-[#34C759]/10 px-4 py-4 text-sm font-medium text-[#1C7F3D]"
          >
            ✅ Te abrimos WhatsApp con tu mensaje listo para enviar. Si no se abrió, usa el botón de WhatsApp en la esquina.
          </motion.div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#0B0B0B]">
                Nombre Completo *
              </label>
              <Input
                id="name"
                {...register('name')}
                placeholder="Tu nombre completo"
                className="rounded-2xl border-[#E5E5EA] bg-white/95 px-4 py-3 text-base text-[#0B0B0B] transition-colors duration-200 focus:border-[#34C759] focus:ring-0"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-[#FF3B30]">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="company" className="mb-2 block text-sm font-medium text-[#0B0B0B]">
                Empresa
              </label>
              <Input
                id="company"
                {...register('company')}
                placeholder="Nombre de tu empresa"
                className="rounded-2xl border-[#E5E5EA] bg-white/95 px-4 py-3 text-base text-[#0B0B0B] transition-colors duration-200 focus:border-[#34C759] focus:ring-0"
              />
              {errors.company && (
                <p className="mt-1 text-sm text-[#FF3B30]">{errors.company.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#0B0B0B]">
                Email *
              </label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder="tu@empresa.com"
                className="rounded-2xl border-[#E5E5EA] bg-white/95 px-4 py-3 text-base text-[#0B0B0B] transition-colors duration-200 focus:border-[#34C759] focus:ring-0"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-[#FF3B30]">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[#0B0B0B]">
                Teléfono
              </label>
              <Input
                id="phone"
                type="tel"
                {...register('phone')}
                placeholder="+52 (81) 1801 9331"
                className="rounded-2xl border-[#E5E5EA] bg-white/95 px-4 py-3 text-base text-[#0B0B0B] transition-colors duration-200 focus:border-[#34C759] focus:ring-0"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-[#FF3B30]">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#0B0B0B]">
              Mensaje *
            </label>
            <Textarea
              id="message"
              {...register('message')}
              placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
              rows={5}
              className="resize-none rounded-2xl border-[#E5E5EA] bg-white/95 px-4 py-3 text-base text-[#0B0B0B] transition-colors duration-200 focus:border-[#34C759] focus:ring-0"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-[#FF3B30]">{errors.message.message}</p>
            )}
          </div>

          {/* Honeypot - Campo oculto para bots */}
          <div className="hidden">
            <label htmlFor="website">Website (leave empty)</label>
            <Input
              id="website"
              {...register('website')}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="text-center">
            <Button
              type="submit"
              className="min-w-[200px] rounded-full bg-[#34C759] px-9 py-4 text-base font-semibold text-white transition-opacity duration-200 hover:opacity-90"
            >
              Enviar por WhatsApp
            </Button>
          </div>

          <p className="text-center text-sm text-[#5A5A5F]">
            Al enviar, te llevamos a WhatsApp con tu mensaje listo para continuar la conversación con nuestro equipo.
          </p>
        </form>
      </div>
    </motion.div>
  );
}
