import React from "react";
import { Download, Apple, Smartphone, ExternalLink } from "lucide-react";

export const InstallPWA: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {/* iOS - Direct App Store Link */}
        <a
          href="https://apps.apple.com/in/app/hosta/id6755623557"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <div className="relative flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <Apple className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-lg">App Store</p>
              <p className="text-xs text-gray-300">Download on iOS</p>
            </div>
            <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
          </div>
        </a>

        {/* Android - Play Store Link */}
        <a
          href="https://play.google.com/store/apps/details?id=com.zorrowtech.hostamanager"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <div className="relative flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <Smartphone className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-lg">Play Store</p>
              <p className="text-xs text-green-100">Get it on Android</p>
            </div>
            <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
          </div>
        </a>
      </div>

     
    </>
  );
};