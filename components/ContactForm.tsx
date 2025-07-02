"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(1, "Please tell us what brings you here"),
  preferredTime: z.string().min(1, "Preferred time is required"),
  agree: z.boolean().refine((val) => val === true, {
    message: "You must agree to be contacted",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptchaError, setRecaptchaError] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    const token = recaptchaRef.current?.getValue();
    if (!token) {
      setRecaptchaError(true);
      return;
    }

    setRecaptchaError(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        alert("Thank you for contacting us!");
        reset();
        recaptchaRef.current?.reset();
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="w-full px-4 py-8 bg-[#f6f3ec]" id="contact">
      <div className="max-w-md mx-auto p-4 border border-green-800 rounded-lg shadow-sm bg-white">
        <h2 className="text-xl font-semibold text-center text-green-900 mb-2">
          Get In Touch
        </h2>
        <p className="text-center text-gray-700 mb-4 text-sm">
          Fill out the form and we’ll get back to you.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 text-sm">
          <div>
            <input
              type="text"
              {...register("name")}
              className="w-full border border-green-800 rounded-md px-3 py-1.5"
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-red-600 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              {...register("phone")}
              className="w-full border border-green-800 rounded-md px-3 py-1.5"
              placeholder="Phone"
            />
            {errors.phone && (
              <p className="text-red-600 mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              {...register("email")}
              className="w-full border border-green-800 rounded-md px-3 py-1.5"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-600 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <textarea
              {...register("message")}
              className="w-full border border-green-800 rounded-md px-3 py-1.5"
              rows={2}
              placeholder="What brings you here?"
            />
            {errors.message && (
              <p className="text-red-600 mt-1">{errors.message.message}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              {...register("preferredTime")}
              className="w-full border border-green-800 rounded-md px-3 py-1.5"
              placeholder="Preferred time to reach you"
            />
            {errors.preferredTime && (
              <p className="text-red-600 mt-1">
                {errors.preferredTime.message}
              </p>
            )}
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              {...register("agree")}
              className="mr-2 mt-1"
            />
            <label className="text-green-900 text-sm">
              I agree to be contacted via email or phone.
            </label>
          </div>
          {errors.agree && (
            <p className="text-red-600 mt-1">{errors.agree.message}</p>
          )}

          <div>
            <ReCAPTCHA
              sitekey="6LdrC3QrAAAAAHD5UzE6ssE_S3w2MFfgnNiza426"
              ref={recaptchaRef}
              theme="light"
              size="compact"
            />
            {recaptchaError && (
              <p className="text-red-600 mt-1">
                Please verify you're not a robot.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#40403e] text-white py-2 rounded-md hover:bg-[#40403e]"
          >
            Submit
          </button>

          <p className="text-xs text-gray-700 mt-2 text-center">
            By clicking submit you consent to receive texts and emails from us.
          </p>
        </form>
      </div>
    </section>
  );
}
