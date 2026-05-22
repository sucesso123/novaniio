import { MessageCircle, FileText, Headphones, Shield, ChevronRight } from 'lucide-react';

const WHATSAPP_NUMBER = '5511962509891';

function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const buttons = [
  {
    icon: Shield,
    label: 'Iniciar um Atendimento Seguro',
    description: 'Fale com um de nossos atendentes de forma segura e confidencial',
    message: 'Olá! Gostaria de iniciar um atendimento seguro.',
    accent: 'from-green-700 to-green-800',
    hover: 'hover:from-green-600 hover:to-green-700',
    iconBg: 'bg-green-600',
  },
  {
    icon: FileText,
    label: '2ª Via de Boleto',
    description: 'Solicite a segunda via do seu boleto de forma rápida e prática',
    message: 'Olá! Preciso da 2ª via do meu boleto.',
    accent: 'from-green-800 to-green-900',
    hover: 'hover:from-green-700 hover:to-green-800',
    iconBg: 'bg-green-700',
  },
  {
    icon: Headphones,
    label: 'Suporte Técnico',
    description: 'Nossa equipe técnica está pronta para resolver seu problema',
    message: 'Olá! Preciso de suporte técnico.',
    accent: 'from-green-700 to-green-800',
    hover: 'hover:from-green-600 hover:to-green-700',
    iconBg: 'bg-green-600',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="w-full bg-gradient-to-r from-green-700 to-green-800 py-6 px-6 flex items-center justify-center border-b-4 border-green-900 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-3 rounded-xl border-2 border-white/40">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <span className="text-white font-bold text-base tracking-widest uppercase">
            Atendimento ao Cliente
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-green-100 border-2 border-green-600 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
            <span className="text-green-700 text-xs font-bold tracking-wider uppercase">Online agora</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Sejam{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-600">
              bem-vindos
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-light text-gray-700 tracking-wide">
            Central de Atendimento ao Cliente
          </h2>

          <div className="mt-6 w-16 h-1 bg-gradient-to-r from-green-700 via-green-600 to-transparent mx-auto rounded-full"></div>

          <p className="mt-6 text-gray-600 text-base leading-relaxed max-w-md mx-auto">
            Estamos aqui para ajudar. Escolha uma das opções abaixo e entraremos em contato pelo WhatsApp.
          </p>
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {buttons.map(({ icon: Icon, label, description, message }) => (
            <a
              key={label}
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white border-2 border-gray-200 rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-green-600 cursor-pointer hover:bg-green-50"
            >
              <div className="relative flex items-start gap-4">
                <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-3.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-gray-900 font-bold text-base leading-snug mb-1.5">
                    {label}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>

              <div className="relative flex items-center gap-2 mt-auto pt-4 border-t-2 border-gray-200 group-hover:border-green-300 transition-colors">
                <div className="flex items-center gap-2 flex-1">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-green-600 fill-current flex-shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.998-1.424A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.182a8.169 8.169 0 01-4.169-1.144l-.298-.178-3.093.882.881-3.014-.194-.309A8.182 8.182 0 1112 20.182z"/>
                  </svg>
                  <span className="text-green-700 text-xs font-bold">Falar no WhatsApp</span>
                </div>
                <ChevronRight className="w-5 h-5 text-green-600 group-hover:text-green-700 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm font-medium">
            Atendimento via WhatsApp &bull; <span className="text-green-700 font-bold">(11) 96250-9891</span>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-6 border-t-4 border-green-700 bg-gray-50 text-center">
        <p className="text-gray-700 text-xs tracking-wide font-medium">
          &copy; {new Date().getFullYear()} Central de Atendimento ao Cliente. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
