"use client";
import { useState } from "react";
import { login, register } from "@/lib/userblog";

export default function LoginOverlay() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 backdrop-blur-sm">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-gray-100">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">
          {isLoginMode ? "Accès Restreint" : "Créer un compte"}
        </h3>
        <p className="text-center text-gray-500 mb-6">
          {isLoginMode
            ? "Veuillez vous identifier pour accéder au blog."
            : "Remplissez le formulaire pour vous inscrire."}
        </p>

        <form
          action={isLoginMode ? login : register}
          className="flex flex-col gap-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Login
            </label>
            <input
              name="login"
              type="text"
              required
              placeholder="Votre identifiant"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mot de passe
            </label>
            <input
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0056d2] text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition mt-2 shadow-md"
          >
            {isLoginMode ? "Se connecter" : "S'inscrire"}
          </button>
        </form>
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setIsLoginMode(!isLoginMode)}
            className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
          >
            {isLoginMode
              ? "Pas encore de compte ? S'inscrire"
              : "Déjà un compte ? Se connecter"}
          </button>
        </div>
      </div>
    </div>
  );
}
