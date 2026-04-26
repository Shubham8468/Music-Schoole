import { BackgroundLines } from "@/components/ul/background-lines";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
       <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">      
          {children}
       </BackgroundLines>
     
    </>
  );
}