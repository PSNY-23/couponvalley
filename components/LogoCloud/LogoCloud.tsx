// components/LogoCloud.tsx
import Image from "next/image";
import PythonLogo from "@/public/images/svg/Python-Logo.svg";
import TailwindCSSLogo from "@/public/images/svg/Tailwind-Logo.svg";
import ReactLogo from "@/public/images/svg/react-logo.svg";
import TypescriptLogo from "@/public/images/svg/TS-Logo.svg";
import FigmaLogo from "@/public/images/svg/figma-logo.svg";
import VercelLogo from "@/public/images/svg/Vercel-Logo.svg";
import EthereumLogo from "@/public/images/svg/ethereum-logo.svg";
import SolidityLogo from "@/public/images/svg/solidity-logo.svg";
import EthersJSLogo from "@/public/images/svg/ethersjs-logo.svg";
import WagmiLogo from "@/public/images/svg/wagmi-logo.svg";
import RainbowKitLogo from "@/public/images/svg/rainbowkit-logo.svg";
import OpenAILogo from "@/public/images/svg/openai-logo.svg";

export const logos = [
  { src: EthereumLogo, alt: "Ethereum Logo", name: "Ethereum" },
  { src: SolidityLogo, alt: "Solidity Logo", name: "Solidity" },
  { src: EthersJSLogo, alt: "Ethers.js Logo", name: "Ethers.js" },
  { src: WagmiLogo, alt: "Wagmi Logo", name: "Wagmi" },
  { src: RainbowKitLogo, alt: "RainbowKit Logo", name: "RainbowKit" },
  { src: OpenAILogo, alt: "OpenAI Logo", name: "AI/ML" },
  { src: ReactLogo, alt: "React Logo", name: "React" },
  { src: VercelLogo, alt: "Vercel Logo", name: "Next.js" },
  { src: TypescriptLogo, alt: "TypeScript Logo", name: "TypeScript" },
  { src: TailwindCSSLogo, alt: "Tailwind CSS Logo", name: "Tailwind CSS" },
  { src: PythonLogo, alt: "Python Logo", name: "Python" },
  { src: FigmaLogo, alt: "Figma Logo", name: "Figma", width: 23, height: 23 },
];

interface LogoProps {
  src: string;
  alt: string;
  name: string;
  width?: number;
  height?: number;
}

const Logo = ({ src, alt }: LogoProps) => (
  <div className="flex h-[100px] w-[100px] items-center justify-center rounded-xl bg-white/5 p-3 shadow-lg backdrop-blur-md">
    <Image
      src={src}
      alt={alt}
      width={100}
      height={100}
      className="h-full w-full object-contain"
    />
  </div>
);

const LogoList = () => (
  <div className="flex items-center">
    {[...Array(2)].map((_, i) => (
      <div key={i} className="flex">
        {logos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="inline-flex items-center px-4"
          >
            <Logo {...logo} />
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default function LogoCloud() {
  return (
    <div className="lg:mt-22 relative z-40 mx-auto mt-[50px] flex max-w-full flex-col gap-0 text-black">
      {/* Row 1 - normal scroll */}
      <div
        className="relative flex w-full overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, black, black)",
          WebkitMaskImage: "linear-gradient(to right, black, black)",
        }}
      >
        <div className="flex animate-marquee-scroll-slow whitespace-nowrap p-5">
          <LogoList />
        </div>
        <div
          className="flex animate-marquee-scroll-slow whitespace-nowrap"
          style={{ animationDelay: "-30s" }}
          aria-hidden="true"
        >
          <LogoList />
        </div>
      </div>

      {/* Row 2 - reverse scroll */}
      <div
        className="relative flex w-full overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, black, black)",
          WebkitMaskImage: "linear-gradient(to right, black, black)",
        }}
      >
        <div className="flex animate-marquee-scroll-reverse-slow whitespace-nowrap p-5">
          <LogoList />
        </div>
        <div
          className="flex animate-marquee-scroll-reverse-slow whitespace-nowrap"
          style={{ animationDelay: "-30s" }}
          aria-hidden="true"
        >
          <LogoList />
        </div>
      </div>
    </div>
  );
}
