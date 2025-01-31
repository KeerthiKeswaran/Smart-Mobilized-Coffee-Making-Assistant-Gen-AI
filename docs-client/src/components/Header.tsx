export default function Header() {
  return (
    <header className="relative bg-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center" />
      
      <div className="container mx-auto px-4 py-24 relative">
        <div className="flex items-center justify-center gap-4 mb-8 ">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-[#C0A080] to-[#8B4513] bg-clip-text text-transparent">
            CAFF-E
          </h1>
        </div>
        <p className="text-2xl text-center text-gray-300 max-w-3xl mx-auto fade-in">
          The World's First AI-Powered Mobile Coffee Assistant
        </p>
      </div>
    </header>
  );
}