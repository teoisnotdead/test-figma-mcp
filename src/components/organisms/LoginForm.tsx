'use client';

import React from 'react';
import Image from 'next/image';
import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';
import Checkbox from '@/components/atoms/Checkbox';
import { ICON_LOGO } from '@/constants/imagePaths';

interface LoginFormProps {
  username: string;
  password: string;
  rememberSession: boolean;
  setUsername: (value: string) => void;
  setPassword: (value: string) => void;
  setRememberSession: (value: boolean) => void;
  handleSubmit: (e: React.FormEvent) => void;
  id?: string; // Agregada la propiedad 'id'
  formError?: string | null; // Nuevo prop para errores del formulario
}

const LoginForm: React.FC<LoginFormProps> = ({
  username,
  password,
  rememberSession,
  setUsername,
  setPassword,
  setRememberSession,
  handleSubmit,
  id,
  formError,
}) => {
  return (
    <div id={id} className="bg-white box-border content-stretch flex flex-col gap-2 md:gap-6 items-center p-6 relative rounded-[16px] w-full max-w-sm md:w-[400px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)]">
      {/* Logo y Titulo */}
      <div className="content-stretch flex flex-col gap-2 md:gap-[25px] items-center relative shrink-0 w-[227px]">
        <div className="bg-[#193cb8] box-border content-stretch flex flex-col md:flex-row gap-2.5 md:gap-[10px] items-start md:items-center p-3 md:p-4 relative rounded-lg md:rounded-[12px] shrink-0 size-12 md:size-[64px]">
          {/* Mobile Logo */}
          <div className="md:hidden h-[23.273px] relative shrink-0 w-6">
            <Image alt="Logo" className="block max-w-none size-full" src={ICON_LOGO} width={24} height={23} />
          </div>
          {/* Desktop Logo */}
          <div className="hidden md:block relative shrink-0 size-8 md:size-8">
            <Image alt="Logo Principal" className="block max-w-none size-full" src={ICON_LOGO} width={32} height={32} />
          </div>
        </div>
        <div className="box-border content-stretch flex flex-col gap-2 md:gap-2 items-center leading-none md:leading-[0] not-italic px-0 py-1 md:py-[4px] relative shrink-0 text-[#364153] text-center w-full">
          <p className="font-['Inter:Bold',_sans-serif] font-bold text-xs md:text-sm tracking-wide md:tracking-[0.5px] leading-4 md:leading-4">Minera Los Andes</p>
          <p className="font-['Inter:Medium',_sans-serif] font-medium text-sm md:text-base leading-5 md:leading-5">Sistema de Gestión de Turnos</p>
        </div>
      </div>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-4 md:gap-6 items-center md:items-end relative shrink-0 w-full">
        <div className="box-border content-stretch flex flex-col gap-4 md:gap-6 items-start justify-center px-0 py-6 relative shrink-0 w-full">
          {/* Campo Usuario */}
          <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
            <label htmlFor="username" className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-sm leading-5 text-[#364153] w-full">Usuario</label>
            <Input
              id="username"
              placeholder="Ingrese su usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {/* Campo Contraseña */}
          <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
            <label htmlFor="password" className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-sm leading-5 text-[#364153] w-full">Contraseña</label>
            <Input
              id="password"
              type="password"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* Checkbox Recordar Sesión */}
          <div className="content-stretch flex gap-2 items-center justify-center relative shrink-0 w-full">
            <Checkbox checked={rememberSession} onChange={setRememberSession} id="remember-session" />
            <label htmlFor="remember-session" className="font-['Inter:Regular',_sans-serif] font-normal text-sm leading-5 text-[#364153]">Recordar sesión</label>
          </div>
        </div>

        {/* Botones de Acción */}
        <div className="box-border content-stretch flex flex-col gap-2 items-start px-0 py-6 relative shrink-0 w-full">
          <Button type="submit" size="Large" variant="Default" className="w-full">Iniciar Sesión</Button>
          {formError && (
            <p className="text-red-500 text-sm mt-2 w-full text-center">{formError}</p>
          )}
          <button type="button" className="box-border content-stretch flex gap-2.5 h-12 items-center justify-center px-0 py-3 relative rounded-lg shrink-0 w-full">
            <p className="font-['Inter:Medium',_sans-serif] font-medium text-sm leading-5 text-[#193cb8] whitespace-pre">¿Olvidaste contraseña?</p>
          </button>
        </div>
      </form>

      {/* Derechos Reservados */}
      <p className="font-['Inter:Regular',_sans-serif] font-normal text-xs leading-4 text-[#364153] text-center w-full min-w-full">© 2024 Minera Los Andes. Todos los derechos reservados.</p>
    </div>
  );
};

export default LoginForm;
