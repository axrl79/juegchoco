'use client';

import Image from 'next/image';

export function GameBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-cyan-300 to-green-300"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/10 via-transparent to-transparent opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/20 to-transparent"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-35">
        <div className="relative w-full h-full" style={{ maxHeight: '85vh' }}>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fondo-9m16ufDMOrHSlKaS3PdFWf1nL77lyn.png"
            alt="City background"
            fill
            className="object-contain object-center"
            priority
          />
        </div>
      </div>
      <div className="absolute top-16 right-20 w-24 h-24 animate-diagonal-movement drop-shadow-lg z-10">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/teleferico-ujvaqWJUX4xay1X3yQm1Q2pNH2l2Cz.png"
          alt="Teleferico"
          width={96}
          height={96}
          className="object-contain filter brightness-125 drop-shadow-lg"
          priority
        />
      </div>
      <div className="absolute bottom-32 left-0 w-full animate-horizontal-scroll z-10">
        <div className="flex items-center whitespace-nowrap gap-32">
          <div className="w-32 h-16 shrink-0 drop-shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/puma-MbLvCx1ZjPscSmog7yqaoivOs7kynO.png"
              alt="Puma"
              width={128}
              height={64}
              className="object-contain filter brightness-125"
            />
          </div>
          <div className="w-32 h-16 shrink-0 drop-shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/puma-MbLvCx1ZjPscSmog7yqaoivOs7kynO.png"
              alt="Puma"
              width={128}
              height={64}
              className="object-contain filter brightness-125"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-16 left-12 opacity-25 animate-float-bounce">
        <div className="text-7xl drop-shadow-md">☁️</div>
      </div>
      <div className="absolute top-48 right-20 opacity-20 animate-float-bounce" style={{ animationDelay: '0.6s' }}>
        <div className="text-6xl drop-shadow-md">☁️</div>
      </div>
      <div className="absolute top-32 right-32 opacity-30 animate-float-bounce" style={{ animationDelay: '1.2s' }}>
        <div className="text-8xl drop-shadow-md">☁️</div>
      </div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>
  );
}
