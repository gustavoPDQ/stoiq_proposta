import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, TrendingUp, AlertTriangle, Package, Calendar, CheckCircle, BarChart2, PieChart, ArrowRight, DollarSign, Users, Database, Layout, XCircle, Target, ShieldCheck, HelpCircle, Store, Clock, Settings, Search, ShoppingCart, Zap, FileText, Activity } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'cover',
      type: 'cover',
      title: (
        <div className="flex flex-col gap-3">
          <span className="text-2xl md:text-3xl text-slate-500 font-medium block">Gere caixa com</span>
          <span className="text-5xl md:text-7xl text-slate-900 font-bold tracking-tight leading-tight block">Inteligência de estoque</span>
        </div>
      ),
      subtitle: 'Metodologia StoIQ',
      footer: 'Proposta de trabalho',
    },
    {
      id: 'about',
      type: 'team',
      title: 'Quem somos',
      subtitle: 'Expertise prática combinada com inteligência de dados',
      members: [
        {
          initials: 'GD',
          name: 'Gustavo Domingues',
          role: 'Dados e Tecnologia',
          bio: 'Sócio da Padoque, engenheiro de formação e com mais de 5 anos de experiência em análise de dados e desenvolvimento de produtos dentro de consultorias.',
          color: 'bg-blue-700',
          photo: '/StoIQ_Gustavo.png'
        },
        {
          photo: '/StoIQ_Breno.png',
          name: 'Breno Penoni',
          role: 'Experiência na ponta',
          bio: 'Fundador da Bendizê, marca de moda/varejo com canais de e-commerce e 7 lojas físicas espalhadas por Minas Gerais. Mais de 8 anos de experiência em gestão de marca e estoque.',
          color: 'bg-indigo-700'
        },
        {
          photo: '/StoIQ_Jonas.png',
          name: 'Jonas Ayres',
          role: 'Gestão e Finanças',
          bio: 'Fundador e diretor da Padoque, especialista em Finanças pela Fundação Dom Cabral (FDC). Com 13 anos de atuação sólida nas áreas de controladoria e finanças.',
          color: 'bg-slate-700'
        }
      ]
    },
    {
      id: 'client_context',
      type: 'client_interview',
      title: 'Quem são vocês?',
      subtitle: 'Antes de começar, queremos entender melhor o seu negócio',
      sections: [
        {
          icon: Store,
          label: 'História da empresa',
          question: 'Como surgiu a empresa? Qual é o modelo de negócio hoje (canais, produtos, estrutura)?'
        },
        {
          icon: Users,
          label: 'Organograma',
          question: 'Quem são as pessoas envolvidas na operação? Quem cuida das compras, do estoque, das vendas?'
        },
        {
          icon: Calendar,
          label: 'Rituais de gestão do estoque',
          question: 'Hoje, como é feita a gestão do estoque? Existe alguma rotina, reunião ou processo estabelecido?'
        },
        {
          icon: BarChart2,
          label: 'Conhecimento atual sobre gestão de estoque',
          question: 'O que você já conhece sobre curva ABC, cobertura de estoque, ruptura e encalhe?'
        },
        {
          icon: AlertTriangle,
          label: 'Desafios e principais dores',
          question: 'Quais são os maiores problemas que você enfrenta hoje na gestão de estoque e planejamento de compras?'
        },
        {
          icon: Target,
          label: 'Expectativas com a StoIQ',
          question: 'O que você espera conquistar com essa consultoria? Qual seria o resultado ideal em 6 meses?'
        },
      ]
    },
    {
      id: 'context',
      type: 'grid_small',
      title: 'Nossos clientes chegam até nós com esses problemas',
      subtitle: 'Você se identifica com algum desses?',
      cards: [
        { icon: AlertTriangle, color: 'text-red-600', title: 'Medo de comprar errado', text: '"Não sei o que comprar agora: não quero deixar faltar para o cliente, mas tenho pavor que fique sobrando no estoque."' },
        { icon: Package, color: 'text-purple-600', title: 'Dinheiro parado no estoque', text: '"Nem sei exatamente o que tem no meu estoque, mas tenho certeza que tem um monte de dinheiro parado lá há um tempão."' },
        { icon: Clock, color: 'text-amber-600', title: 'Planejamento de compra demorado', text: '"Gasto muito tempo para planejar a compra e mesmo assim não tenho uma rotina clara de quando e quanto pedir."' },
        { icon: Target, color: 'text-blue-600', title: 'Meta sem base real', text: '"Não sei que meta colocar. Às vezes parece inalcançável, às vezes parece que ficou fácil demais."' },
        { icon: ShieldCheck, color: 'text-emerald-600', title: 'Estoque insuficiente para a meta', text: '"Não sei se tenho estoque suficiente para bater a meta que prometi em cada um dos meus canais."' },
        { icon: HelpCircle, color: 'text-orange-600', title: 'Vendas perdidas', text: '"Não sei se estou perdendo vendas por falta de estoque."' },
      ],
      highlight: 'Se você já pensou alguma dessas frases, a StoIQ foi feita para você.',
    },
    {
      id: 'deliverables',
      type: 'deliverables_new',
      title: 'O que entregamos',
      subtitle: 'Quatro entregas que transformam dados em decisões de compra',
      items: [
        {
          number: '01',
          icon: Database,
          title: 'Saúde dos dados',
          desc: 'Auditamos o ERP, identificamos inconsistências e orientamos o que corrigir — a execução fica com você. Decisão boa começa com dado confiável.',
          color: 'border-slate-400 text-slate-600'
        },
        {
          number: '02',
          icon: Activity,
          title: 'Raio-X do estoque',
          desc: 'Panorama completo: quanto está saudável, encalhado, em ruptura ou em estado crítico — por curva ABC, categoria e canal. Quanto já foi perdido em vendas e quanto ainda será.',
          color: 'border-blue-500 text-blue-600'
        },
        {
          number: '03',
          icon: Zap,
          title: 'Sugestão de giro de estoque',
          desc: 'Recomendações de ações para acelerar o giro: promoções, redistribuição entre canais e liquidação de encalhados.',
          color: 'border-amber-500 text-amber-600'
        },
        {
          number: '04',
          icon: ShoppingCart,
          title: 'Sugestão de compra',
          desc: 'Relatório Open-to-Buy mastigado por fornecedor: SKU, quantidade e valor. Você recebe pronto para executar.',
          color: 'border-green-500 text-green-600'
        },
        {
          number: '05',
          icon: Target,
          title: 'Acompanhamento de meta',
          desc: 'Análise se você tem ou terá estoque suficiente para bater as metas de venda definidas.',
          color: 'border-purple-500 text-purple-600'
        },
      ]
    },
    {
      id: 'data_health',
      type: 'data_health',
      title: 'Saúde dos Dados',
      subtitle: 'Antes de qualquer análise, auditamos a qualidade do seu cadastro. Dado ruim gera decisão ruim.',
      checks: [
        { label: 'SKUs vazios',                    desc: 'Produtos sem nome ou descrição que tornam impossível identificar o que está sendo vendido ou comprado.' },
        { label: 'SKUs duplicados',                desc: 'O mesmo produto cadastrado mais de uma vez divide o histórico de vendas e distorce qualquer análise.' },
        { label: 'Estoque negativo',               desc: 'Saldo negativo indica movimentação sem registro ou divergência entre físico e sistema.' },
        { label: 'Preço de custo vazio',           desc: 'Sem custo não é possível calcular margem, cobertura financeira nem sugerir compra com orçamento.' },
        { label: 'Preço de venda vazio',           desc: 'Impede o cálculo de faturamento potencial e torna inviável qualquer projeção de meta.' },
        { label: 'Categoria vazia',                desc: 'Sem categoria não há curva ABC por departamento nem análise segmentada por linha de produto.' },
        { label: 'Fornecedor vazio',               desc: 'Sem fornecedor não é possível agrupar sugestões de compra por pedido nem respeitar lead times.' },
        { label: 'Sem venda nos últimos 180 dias', desc: 'Produto parado há mais de 6 meses é candidato a encalhe e precisa de decisão imediata.' },
      ]
    },
    {
      id: 'stock_status',
      type: 'stock_status',
      title: 'Raio-X do Estoque na prática',
      subtitle: 'Como classificamos cada SKU e o que isso significa para o seu negócio',
      statuses: [
        {
          key: 'saudavel',
          label: 'Saudável',
          dotColor: 'bg-green-500',
          textColor: 'text-green-700',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          definition: 'Dentro da cobertura ideal e sem perder vendas por ruptura.',
          example: 'Produto com cobertura de 45 dias e lead time de 30 dias — estoque certo na quantidade certa.',
        },
        {
          key: 'encalhado',
          label: 'Encalhado',
          dotColor: 'bg-amber-400',
          textColor: 'text-amber-700',
          bgColor: 'bg-amber-50',
          borderColor: 'border-amber-200',
          definition: 'Acima da cobertura ideal definida — capital de giro preso em mercadoria parada.',
          example: 'Produto comprado para 90 dias de estoque, mas que vende em ritmo de 30 dias — sobra 60 dias encalhados.',
        },
        {
          key: 'ruptura',
          label: 'Ruptura',
          dotColor: 'bg-orange-500',
          textColor: 'text-orange-700',
          bgColor: 'bg-orange-50',
          borderColor: 'border-orange-200',
          definition: 'Tem estoque, mas insuficiente para cobrir o lead time do fornecedor.',
          example: 'Restam 10 peças, vende 5/dia, lead time 7 dias — vai zerar antes da reposição chegar.',
        },
        {
          key: 'critico',
          label: 'Crítico',
          dotColor: 'bg-red-500',
          textColor: 'text-red-700',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          definition: 'Sem estoque hoje — perdendo venda agora.',
          example: 'SKU zerado na loja: o cliente quer comprar, mas não tem produto disponível.',
        },
      ],
      tableData: {
        rows: [
          { key: 'saudavel',  label: 'Saudável',  total: 56,  pct: '7%',  a: 29,  pctA: '15%', b: 19,  pctB: '9%',  c: 8,   pctC: '2%'  },
          { key: 'encalhado', label: 'Encalhado', total: 444, pct: '55%', a: 63,  pctA: '32%', b: 134, pctB: '60%', c: 247, pctC: '64%' },
          { key: 'ruptura',   label: 'Ruptura',   total: 119, pct: '15%', a: 56,  pctA: '28%', b: 24,  pctB: '11%', c: 39,  pctC: '10%' },
          { key: 'critico',   label: 'Crítico',   total: 188, pct: '23%', a: 49,  pctA: '25%', b: 45,  pctB: '20%', c: 94,  pctC: '24%' },
        ],
        totals: { total: 807, a: 197, b: 222, c: 388 },
      },
    },
    {
      id: 'giro_encalhados',
      type: 'giro_encalhados',
      title: 'Sugestão de Giro de Encalhados',
      subtitle: 'Quanto capital de giro está parado e quanto você pode recuperar com cada nível de desconto',
      summary: {
        rows: [
          { label: 'Quantidade excedente',  total: '444',            a: '63',           b: '134',          c: '247'          },
          { label: 'Valor de custo total',  total: 'R$ 57.720',      a: 'R$ 8.190',     b: 'R$ 17.420',    c: 'R$ 32.110'    },
          { label: 'Valor de venda total',  total: 'R$ 230.880',     a: 'R$ 32.760',    b: 'R$ 69.680',    c: 'R$ 128.440'   },
        ],
      },
      discounts: [
        { pct: '0%',  total: 'R$ 230.880', a: 'R$ 32.760', b: 'R$ 69.680', c: 'R$ 128.440' },
        { pct: '10%', total: 'R$ 207.792', a: 'R$ 29.484', b: 'R$ 62.712', c: 'R$ 115.596' },
        { pct: '20%', total: 'R$ 184.704', a: 'R$ 26.208', b: 'R$ 55.744', c: 'R$ 102.752' },
        { pct: '30%', total: 'R$ 161.616', a: 'R$ 22.932', b: 'R$ 48.776', c: 'R$  89.908' },
        { pct: '40%', total: 'R$ 138.528', a: 'R$ 19.656', b: 'R$ 41.808', c: 'R$  77.064' },
        { pct: '50%', total: 'R$ 115.440', a: 'R$ 16.380', b: 'R$ 34.840', c: 'R$  64.220' },
        { pct: '60%', total: 'R$  92.352', a: 'R$ 13.104', b: 'R$ 27.872', c: 'R$  51.376' },
        { pct: '70%', total: 'R$  69.264', a: 'R$  9.828', b: 'R$ 20.904', c: 'R$  38.532' },
      ],
    },
    {
      id: 'sugestao_compra',
      type: 'sugestao_compra',
      title: 'Sugestão de Compra',
      subtitle: 'Relatório por fornecedor com SKU, quantidade e investimento — pronto para executar',
      params: [
        { label: 'Cobertura ideal', value: '2× lead time', desc: 'Estoque suficiente para vender durante o lead time e ainda ter reserva para variações de demanda' },
        { label: 'Próxima compra', value: '05/04/2025', desc: 'Data-limite para emissão do pedido garantindo reposição antes do estoque zerar' },
        { label: 'Orçamento disponível', value: 'R$ 45.000', desc: 'Teto de investimento definido com o cliente para o ciclo de compra' },
      ],
      category: {
        name: 'Feminino — Fornecedor: Studio Moda',
        curve: 'A',
        items: [
          { sku: 'CAL-FEM-001', name: 'Calça Slim Feminina P',   estoque: 4,  vendaDia: 2.1, leadtime: 15, coberturaAtual: 2,  sugestao: 55,  custo: 89.90  },
          { sku: 'CAL-FEM-002', name: 'Calça Slim Feminina M',   estoque: 0,  vendaDia: 3.4, leadtime: 15, coberturaAtual: 0,  sugestao: 102, custo: 89.90  },
          { sku: 'CAL-FEM-003', name: 'Calça Slim Feminina G',   estoque: 11, vendaDia: 1.8, leadtime: 15, coberturaAtual: 6,  sugestao: 43,  custo: 89.90  },
          { sku: 'VES-FEM-022', name: 'Vestido Midi Floral P',   estoque: 2,  vendaDia: 1.5, leadtime: 20, coberturaAtual: 1,  sugestao: 58,  custo: 129.90 },
          { sku: 'VES-FEM-023', name: 'Vestido Midi Floral M',   estoque: 0,  vendaDia: 2.2, leadtime: 20, coberturaAtual: 0,  sugestao: 88,  custo: 129.90 },
          { sku: 'BLU-FEM-008', name: 'Blusa Linho Off-White M', estoque: 18, vendaDia: 0.9, leadtime: 20, coberturaAtual: 20, sugestao: 18,  custo: 69.90  },
          { sku: 'BLU-FEM-009', name: 'Blusa Linho Off-White G', estoque: 3,  vendaDia: 1.1, leadtime: 20, coberturaAtual: 3,  sugestao: 41,  custo: 69.90  },
        ],
      },
    },
    {
      id: 'acompanhamento_meta',
      type: 'acompanhamento_meta',
      title: 'Acompanhamento de Meta',
      subtitle: 'Você vai bater a meta? Cruzamos vendas realizadas, estoque disponível e pedidos a entregar',
      periodo: { mes: 'Março 2025', diaAtual: 13, totalDias: 31 },
      totais: {
        meta:      { label: 'Meta do mês',          value: 85000 },
        vendido:   { label: 'Vendido até 13/03',     value: 38420 },
        estoque:   { label: 'Estoque disponível',    value: 52300 },
        aEntregar: { label: 'Pedidos a entregar',    value: 18600 },
      },
      categorias: [
        {
          nome: 'Feminino',
          meta: 42000,
          vendido: 19800,
          estoque: 27400,
          aEntregar: 9200,
        },
        {
          nome: 'Masculino',
          meta: 28000,
          vendido: 12600,
          estoque: 17300,
          aEntregar: 6800,
        },
        {
          nome: 'Acessórios',
          meta: 15000,
          vendido: 6020,
          estoque: 7600,
          aEntregar: 2600,
        },
      ],
    },
    {
      id: 'timeline',
      type: 'timeline_new',
      title: 'Como funciona na prática',
      subtitle: 'Três etapas para colocar o seu estoque sob controle',
      steps: [
        {
          phase: 'Setup · Primeira quinzena',
          title: 'Saúde dos dados',
          color: 'bg-slate-600',
          icon: Database,
          items: [
            'Análise da base de cadastro de produtos',
            'Análise da base de vendas',
            'Análise da base de estoque',
            'Relatório com ajustes necessários',
            'Dever de casa: correções pelo cliente no ERP',
          ]
        },
        {
          phase: 'Setup · Segunda quinzena',
          title: 'Diagnóstico & Parâmetros',
          color: 'bg-slate-600',
          icon: Search,
          items: [
            'Diagnóstico completo do estoque',
            '"Aula" sobre conceitos básicos (curva ABC, cobertura, lead time)',
            'Validação de parâmetros: metas de vendas, cobertura, orçamento de compra',
            'Primeira sugestão de giro de estoque',
            'Primeira sugestão de compra',
          ]
        },
        {
          phase: 'Recorrente · Mensal',
          title: 'PCP as a Service',
          color: 'bg-blue-700',
          icon: TrendingUp,
          items: [
            'Curva ABC atualizada por categoria e referência',
            'Sugestões de giro de estoque',
            'Sugestões de compra por SKU',
            'Indicadores e diagnóstico de saúde do estoque',
            'Duas reuniões mensais de análise e decisão',
            'Auditoria contínua da qualidade dos dados',
          ]
        },
      ]
    },
    {
      id: 'limitations',
      type: 'list_visual_red',
      title: 'O que não fazemos',
      subtitle: 'Para garantir o foco estratégico, algumas atividades operacionais não estão no escopo:',
      items: [
        { title: 'Contagem de estoque', desc: 'Não realizamos inventário físico ou contagem de peças.', icon: Package },
        { title: 'Compra e negociação', desc: 'Não realizamos compra de produtos nem negociamos com fornecedores. Sugerimos, mas quem executa é você.', icon: Store },
        { title: 'Tomada de decisão final', desc: 'Nós sugerimos com base em dados, mas o "bater o martelo" da compra é sempre do dono.', icon: Target },
        { title: 'Direção estratégica', desc: 'Não definimos coleção, posicionamento de marca ou estilo, apenas damos suporte numérico à estratégia existente.', icon: TrendingUp },
        { title: 'Operação manual de ERP', desc: 'Não lançamos notas fiscais ou cadastramos produtos manualmente.', icon: Database },
      ],
    },
    {
      id: 'premises',
      type: 'list_visual',
      title: 'Premissas para o sucesso',
      subtitle: 'O que precisamos para o projeto rodar',
      items: [
        { icon: Settings, title: 'ERP compatível', desc: 'Utilizar ERP Tiny ou Bling com acesso aos dados de vendas e estoque.' },
        { icon: Clock, title: 'Agenda quinzenal', desc: 'Dispor de 1h a cada 15 dias para o ritual de análise e tomada de decisão.' },
        { icon: Database, title: 'Gestão de dados', desc: 'Dispor de tempo e disponibilidade interna para ajustar dados no ERP caso seja necessário.' },
      ]
    },
    {
      id: 'proposal',
      type: 'pricing_split',
      title: 'Proposta de trabalho',
      subtitle: 'Modelo exclusivo para parceiros beta',
      cards: [
        {
          title: 'Setup: Diagnóstico e Higiene',
          period: 'Primeiro mês (2 quinzenas)',
          priceOld: 'R$ 3.500,00',
          priceNew: 'GRATUITO',
          tag: 'CORTESIA',
          features: [
            'Diagnóstico inicial completo',
            'Auditoria de saúde dos dados',
            'Orientações de correção dos dados',
            '1 Reunião estratégica (se premissas ok)',
          ],
          highlight: false
        },
        {
          title: 'PCP as a Service',
          period: 'Recorrente (mensal)',
          price: 'R$ 2.000,00',
          priceSub: '/mês',
          features: [
            'Ritual quinzenal (2 reuniões/mês)',
            'Análise de ruptura e encalhe',
            'Apoio na definição de metas de vendas',
            'Sugestão de compras por SKU',
            'Suporte contínuo via WhatsApp',
            'Relatórios em PDF/Excel'
          ],
          highlight: false
        }
      ]
    },
    {
      id: 'next_steps',
      type: 'cover',
      title: 'Próximos passos',
      subtitle: '',
      footer: '1. Aceite da proposta | 2. Acesso ao ERP | 3. Kick-off',
      cta: true
    }
  ];

  const nextSlide = () => { if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1); };
  const prevSlide = () => { if (currentSlide > 0) setCurrentSlide(currentSlide - 1); };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const SlideContent = ({ slide }) => {
    switch (slide.type) {

      case 'team':
        return (
          <div className="flex flex-col h-full pt-8 pb-14 px-8 md:px-16 animate-fadeIn w-full">
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-slate-900 mb-1">{slide.title}</h2>
              <p className="text-base text-slate-500">{slide.subtitle}</p>
            </div>
            <div className="grid grid-cols-3 gap-6 flex-1 min-h-0">
              {slide.members.map((m, idx) => (
                <div key={idx} className="flex flex-col bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all min-h-0">
                  <div className={`w-full h-56 ${m.color} flex items-center justify-center overflow-hidden flex-shrink-0`}>
                    {m.photo
                      ? <img src={m.photo} alt={m.name} className="w-full h-full object-cover object-top" />
                      : <span className="text-white font-bold text-4xl opacity-40">{m.initials}</span>
                    }
                  </div>
                  <div className="px-4 pt-3 pb-3 text-center flex flex-col gap-2.5 flex-shrink-0">
                    <h3 className="text-base font-bold text-slate-800 leading-tight">{m.name}</h3>
                    <span className="text-xs font-semibold text-blue-600">{m.role}</span>
                    <p className="text-xs text-slate-500 leading-snug">{m.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'client_interview':
        return (
          <div className="flex flex-col h-full pt-8 pb-14 px-8 md:px-16 animate-fadeIn w-full">
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-slate-900 mb-1">{slide.title}</h2>
              <p className="text-base text-slate-500">{slide.subtitle}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 flex-1 content-center">
              {slide.sections.map((s, idx) => (
                <div key={idx} className="flex gap-3 items-center bg-slate-50 rounded-xl px-4 py-3 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/40 transition-colors">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 flex-shrink-0">
                    <s.icon size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 leading-tight">{s.label}</p>
                    <p className="text-xs text-slate-500 italic leading-snug mt-0.5">{s.question}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'deliverables_new':
        return (
          <div className="flex flex-col h-full pt-8 pb-14 px-8 md:px-16 animate-fadeIn w-full">
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-slate-900 mb-1">{slide.title}</h2>
              <p className="text-base text-slate-500">{slide.subtitle}</p>
            </div>
            <div className="flex-1 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 w-full" style={{ gridAutoRows: '1fr' }}>
              {slide.items.map((item, idx) => (
                <div key={idx} className={`bg-white rounded-2xl p-3 border-l-4 ${item.color} shadow-sm hover:shadow-md transition-all flex gap-2${idx === slide.items.length - 1 && slide.items.length % 2 !== 0 ? ' col-start-1 col-end-3 max-w-[calc(50%-0.75rem)] mx-auto w-full' : ''}`}>
                  <div className="flex-shrink-0">
                    <span className={`text-2xl font-black ${item.color.split(' ')[1]} opacity-20 leading-none`}>{item.number}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <item.icon size={16} className={item.color.split(' ')[1]} />
                      <h3 className="text-sm font-bold text-slate-800">{item.title}</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        );

      case 'timeline_new':
        return (
          <div className="flex flex-col h-full pt-8 pb-14 px-8 md:px-16 animate-fadeIn w-full">
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-slate-900 mb-1">{slide.title}</h2>
              <p className="text-base text-slate-500">{slide.subtitle}</p>
            </div>
            <div className="flex-1 flex items-center">
            <div className="grid grid-cols-3 gap-5 w-full">
              {slide.steps.map((step, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all flex flex-col">
                  <div className={`${step.color} px-4 py-3 flex items-center gap-3`}>
                    <step.icon size={20} className="text-white/80" />
                    <div>
                      <p className="text-white/70 text-xs font-semibold uppercase tracking-wide">{step.phase}</p>
                      <p className="text-white font-bold text-base leading-tight">{step.title}</p>
                    </div>
                  </div>
                  <ul className="px-4 py-2 space-y-1 flex-1">
                    {step.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2 text-[0.8rem] text-slate-600">
                        <CheckCircle size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            </div>
          </div>
        );

      case 'cover':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-8 animate-fadeIn">
            <div className="w-24 h-24 bg-blue-800 rounded-2xl flex items-center justify-center mb-12 shadow-xl">
              <BarChart2 className="w-12 h-12 text-white" />
            </div>
            <div className="max-w-4xl">{slide.title}</div>
            {slide.subtitle && <p className="text-xl md:text-2xl text-blue-600 font-medium max-w-2xl mt-8">{slide.subtitle}</p>}
            {slide.cta && (
              <button className="px-8 py-4 bg-blue-700 text-white rounded-lg font-bold text-lg shadow-lg hover:bg-blue-800 transition-all flex items-center gap-2">
                Vamos começar? <ArrowRight size={20} />
              </button>
            )}
            {slide.footer && (
              <div className="pt-8 border-t border-slate-200 w-full max-w-md">
                <p className="text-slate-500 font-medium">{slide.footer}</p>
              </div>
            )}
          </div>
        );

      case 'pricing_split':
        return (
          <div className="flex flex-col h-full pt-8 pb-14 px-8 md:px-16 animate-fadeIn w-full">
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-slate-900 mb-1">{slide.title}</h2>
              <p className="text-base text-slate-500">{slide.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch flex-1 min-h-0 max-w-5xl mx-auto w-full">
              {slide.cards.map((card, idx) => (
                <div key={idx} className="w-full bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 relative transform transition-all flex flex-col">
                  {card.tag && (
                    <div className="bg-green-500 text-white text-center py-1 px-8 font-bold text-xs tracking-wider uppercase absolute top-4 -right-10 rotate-45 shadow-sm">{card.tag}</div>
                  )}
                  <div className="p-6 text-center border-b border-slate-100">
                    <h3 className="text-xl font-bold text-slate-800 mb-1">{card.title}</h3>
                    <p className="text-sm text-slate-500 font-medium mb-4">{card.period}</p>
                    <div className="flex flex-col items-center justify-center gap-0">
                      {card.priceOld && <span className="text-slate-400 font-medium text-lg line-through">{card.priceOld}</span>}
                      <div className="flex items-baseline gap-1">
                        {card.priceNew ? (
                          <span className="text-4xl font-extrabold text-green-600">{card.priceNew}</span>
                        ) : (
                          <span className="text-4xl font-extrabold text-blue-700">{card.price}</span>
                        )}
                        {card.priceSub && <span className="text-slate-500 font-medium">{card.priceSub}</span>}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-white flex-1">
                    <ul className="space-y-3">
                      {card.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-slate-700 text-sm">
                          <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="font-medium">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'list_visual':
        return (
          <div className="flex flex-col h-full pt-8 pb-14 px-8 md:px-16 animate-fadeIn w-full">
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-slate-900 mb-1">{slide.title}</h2>
              <p className="text-base text-slate-500">{slide.subtitle}</p>
            </div>
            <div className="flex flex-col justify-center flex-1 gap-3">
              {slide.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border-l-4 border-blue-600 shadow-sm">
                  <div className="bg-white p-3 rounded-full shadow-sm text-blue-700 flex-shrink-0">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800">{item.title}</h3>
                    <p className="text-xs text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'list_visual_red':
        return (
          <div className="flex flex-col h-full pt-8 pb-14 px-8 md:px-16 animate-fadeIn w-full">
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-slate-900 mb-1">{slide.title}</h2>
              <p className="text-base text-slate-500">{slide.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1 content-center">
              {slide.items.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-2 p-4 bg-red-50/50 rounded-xl border border-red-100 shadow-sm hover:border-red-200 transition-colors">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-white rounded-lg shadow-sm text-red-600">
                      <XCircle size={18} />
                    </div>
                    <h3 className="text-sm font-bold text-slate-800">{item.title}</h3>
                  </div>
                  <p className="text-xs text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'grid_small':
        return (
          <div className="flex flex-col h-full pt-8 pb-14 px-8 md:px-16 animate-fadeIn w-full">
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-slate-900 mb-1">{slide.title}</h2>
              <p className="text-base text-slate-500">{slide.subtitle}</p>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-6">
              <div className="grid grid-cols-3 gap-4" style={{ gridAutoRows: '1fr' }}>
                {slide.cards.map((card, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-xl shadow-sm border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className={`p-1.5 rounded-lg bg-slate-50 ${card.color} flex-shrink-0`}>
                        <card.icon size={16} />
                      </div>
                      <h3 className="text-sm font-bold text-slate-800 leading-tight">{card.title}</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-snug italic">{card.text}</p>
                  </div>
                ))}
              </div>
              {slide.highlight && (
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg w-full">
                  <p className="text-base font-semibold text-blue-900">{slide.highlight}</p>
                </div>
              )}
            </div>
          </div>
        );

      case 'giro_encalhados':
        return (
          <div className="flex flex-col h-full pt-6 pb-12 px-8 md:px-14 animate-fadeIn w-full gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-1">{slide.title}</h2>
              <p className="text-base text-slate-500">{slide.subtitle}</p>
            </div>

            {/* Summary KPIs */}
            <div className="grid grid-cols-3 gap-4 flex-shrink-0">
              {slide.summary.rows.map((row, idx) => {
                const configs = [
                  { bg: 'bg-amber-50', border: 'border-amber-200', label: 'text-amber-600', value: 'text-amber-800', icon: Package },
                  { bg: 'bg-slate-50', border: 'border-slate-200', label: 'text-slate-500', value: 'text-slate-800', icon: DollarSign },
                  { bg: 'bg-green-50', border: 'border-green-200', label: 'text-green-600', value: 'text-green-800', icon: TrendingUp },
                ];
                const c = configs[idx];
                return (
                  <div key={idx} className={`${c.bg} border ${c.border} rounded-xl px-4 py-3 flex items-center gap-3`}>
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-white shadow-sm ${c.label}`}>
                      <c.icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className={`text-[11px] font-semibold uppercase tracking-wide ${c.label}`}>{row.label}</p>
                      <p className={`text-lg font-extrabold leading-tight ${c.value}`}>{row.total}</p>
                      <div className="flex gap-2 mt-0.5">
                        {[['A', row.a], ['B', row.b], ['C', row.c]].map(([curve, val]) => (
                          <span key={curve} className="text-[10px] text-slate-500"><span className="font-bold text-slate-600">{curve}</span> {val}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Discount table */}
            <div className="flex-1 flex flex-col min-h-0">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide mb-1.5">Potencial de caixa por desconto médio</p>
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                <table className="text-xs w-full border-collapse">
                  <thead>
                    <tr className="bg-amber-500 text-white font-semibold">
                      <th className="px-4 py-2 text-left">Desconto</th>
                      <th className="px-4 py-2 text-right">Total</th>
                      <th className="px-4 py-2 text-right border-l border-amber-400 bg-amber-600">A</th>
                      <th className="px-4 py-2 text-right border-l border-amber-400">B</th>
                      <th className="px-4 py-2 text-right border-l border-amber-400">C</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slide.discounts.map((row, idx) => (
                      <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'} hover:bg-amber-50/40 transition-colors`}>
                        <td className={`px-4 py-1.5 font-bold ${idx === 0 ? 'text-slate-400' : 'text-amber-600'}`}>{row.pct}</td>
                        <td className="px-4 py-1.5 text-right font-semibold text-slate-800">{row.total}</td>
                        <td className="px-4 py-1.5 text-right text-blue-700 font-medium border-l border-slate-100 bg-blue-50/30">{row.a}</td>
                        <td className="px-4 py-1.5 text-right text-slate-700 font-medium border-l border-slate-100">{row.b}</td>
                        <td className="px-4 py-1.5 text-right text-slate-700 font-medium border-l border-slate-100">{row.c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'acompanhamento_meta': {
        const { periodo, totais, categorias } = slide;
        const diasRestantes = periodo.totalDias - periodo.diaAtual;
        const ritmoAtual = totais.vendido.value / periodo.diaAtual;
        const projecao = Math.round(ritmoAtual * periodo.totalDias);
        const disponivel = totais.estoque.value + totais.aEntregar.value;
        const falta = totais.meta.value - totais.vendido.value;
        const pctMes = Math.round((periodo.diaAtual / periodo.totalDias) * 100);
        const pctVendido = Math.round((totais.vendido.value / totais.meta.value) * 100);
        const brl = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
        const statusGeral = disponivel >= falta
          ? { label: 'Vai bater', bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-300' }
          : disponivel >= falta * 0.85
          ? { label: 'Em risco', bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-300' }
          : { label: 'Não vai bater', bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-300' };

        return (
          <div className="flex flex-col h-full pt-6 pb-12 px-8 md:px-14 animate-fadeIn w-full gap-3">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-1">{slide.title}</h2>
                <p className="text-base text-slate-500">{slide.subtitle}</p>
              </div>
              <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${statusGeral.bg} ${statusGeral.border} flex-shrink-0`}>
                <span className={`text-sm font-bold ${statusGeral.text}`}>{statusGeral.label}</span>
              </div>
            </div>

            {/* KPI cards */}
            <div className="grid grid-cols-5 gap-3 flex-shrink-0">
              {/* Meta */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl px-3 py-2.5 col-span-1">
                <p className="text-[10px] font-bold text-blue-500 uppercase tracking-wide">{totais.meta.label}</p>
                <p className="text-xl font-extrabold text-blue-800">{brl(totais.meta.value)}</p>
                <p className="text-[10px] text-blue-400">{periodo.mes}</p>
              </div>
              {/* Vendido + barra */}
              <div className="bg-white border border-slate-200 rounded-xl px-3 py-2.5 col-span-2">
                <div className="flex justify-between items-start mb-1">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">{totais.vendido.label}</p>
                  <span className="text-[10px] font-bold text-slate-400">{pctVendido}% da meta · dia {periodo.diaAtual}/{periodo.totalDias} ({pctMes}% do mês)</span>
                </div>
                <p className="text-xl font-extrabold text-slate-800 mb-1.5">{brl(totais.vendido.value)}</p>
                <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden">
                  {/* Marker: onde deveria estar no ritmo ideal */}
                  <div className="absolute top-0 h-full bg-slate-300 rounded-full" style={{ width: `${pctMes}%` }} />
                  {/* Vendido real */}
                  <div className="absolute top-0 h-full bg-blue-500 rounded-full" style={{ width: `${Math.min(pctVendido, 100)}%` }} />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] text-slate-400">Ritmo ideal: {brl(Math.round(ritmoAtual * periodo.totalDias * (pctMes/pctVendido)))}</span>
                  <span className="text-[10px] text-blue-600 font-semibold">Projeção: {brl(projecao)}</span>
                </div>
              </div>
              {/* Estoque disponível */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">{totais.estoque.label}</p>
                <p className="text-xl font-extrabold text-slate-800">{brl(totais.estoque.value)}</p>
                <p className="text-[10px] text-slate-400">valor de venda</p>
              </div>
              {/* A entregar */}
              <div className="bg-purple-50 border border-purple-200 rounded-xl px-3 py-2.5">
                <p className="text-[10px] font-bold text-purple-500 uppercase tracking-wide">{totais.aEntregar.label}</p>
                <p className="text-xl font-extrabold text-purple-800">{brl(totais.aEntregar.value)}</p>
                <p className="text-[10px] text-purple-400">em trânsito</p>
              </div>
            </div>

            {/* Category table */}
            <div className="flex-1 flex flex-col min-h-0">
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                <table className="text-xs w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-700 text-white font-semibold">
                      <th className="px-4 py-2 text-left">Categoria</th>
                      <th className="px-4 py-2 text-right border-l border-blue-600">Meta</th>
                      <th className="px-4 py-2 text-right border-l border-blue-600">Vendido</th>
                      <th className="px-4 py-2 text-right border-l border-blue-600">% meta</th>
                      <th className="px-4 py-2 text-right border-l border-blue-600">Falta</th>
                      <th className="px-4 py-2 text-right border-l border-blue-600">Estoque disp.</th>
                      <th className="px-4 py-2 text-right border-l border-blue-600">A entregar</th>
                      <th className="px-4 py-2 text-right border-l border-blue-500 bg-blue-800">Total disp.</th>
                      <th className="px-4 py-2 text-center border-l border-blue-500 bg-blue-800">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categorias.map((cat, idx) => {
                      const faltaCat = cat.meta - cat.vendido;
                      const dispCat = cat.estoque + cat.aEntregar;
                      const pctCat = Math.round((cat.vendido / cat.meta) * 100);
                      const st = dispCat >= faltaCat
                        ? { label: 'OK', bg: 'bg-green-100', text: 'text-green-700' }
                        : dispCat >= faltaCat * 0.85
                        ? { label: 'Risco', bg: 'bg-amber-100', text: 'text-amber-700' }
                        : { label: 'Gap', bg: 'bg-red-100', text: 'text-red-700' };
                      return (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                          <td className="px-4 py-2 font-bold text-slate-800">{cat.nome}</td>
                          <td className="px-4 py-2 text-right text-slate-600 border-l border-slate-100">{brl(cat.meta)}</td>
                          <td className="px-4 py-2 text-right font-semibold text-blue-700 border-l border-slate-100">{brl(cat.vendido)}</td>
                          <td className="px-4 py-2 text-right border-l border-slate-100">
                            <div className="flex items-center justify-end gap-1.5">
                              <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-400 rounded-full" style={{ width: `${Math.min(pctCat, 100)}%` }} />
                              </div>
                              <span className="text-slate-600 font-medium">{pctCat}%</span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-right font-semibold text-red-600 border-l border-slate-100">{brl(faltaCat)}</td>
                          <td className="px-4 py-2 text-right text-slate-600 border-l border-slate-100">{brl(cat.estoque)}</td>
                          <td className="px-4 py-2 text-right text-purple-700 font-medium border-l border-slate-100">{brl(cat.aEntregar)}</td>
                          <td className="px-4 py-2 text-right font-bold text-slate-800 border-l border-slate-100 bg-slate-50">{brl(dispCat)}</td>
                          <td className="px-4 py-2 text-center border-l border-slate-100 bg-slate-50">
                            <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${st.bg} ${st.text}`}>{st.label}</span>
                          </td>
                        </tr>
                      );
                    })}
                    <tr className="bg-blue-700 text-white font-bold border-t-2 border-blue-800">
                      <td className="px-4 py-2">Total</td>
                      <td className="px-4 py-2 text-right border-l border-blue-600">{brl(totais.meta.value)}</td>
                      <td className="px-4 py-2 text-right border-l border-blue-600">{brl(totais.vendido.value)}</td>
                      <td className="px-4 py-2 text-right border-l border-blue-600">{pctVendido}%</td>
                      <td className="px-4 py-2 text-right border-l border-blue-600">{brl(falta)}</td>
                      <td className="px-4 py-2 text-right border-l border-blue-600">{brl(totais.estoque.value)}</td>
                      <td className="px-4 py-2 text-right border-l border-blue-600">{brl(totais.aEntregar.value)}</td>
                      <td className="px-4 py-2 text-right border-l border-blue-500 bg-blue-800">{brl(disponivel)}</td>
                      <td className="px-4 py-2 text-center border-l border-blue-500 bg-blue-800">
                        <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${statusGeral.bg} ${statusGeral.text}`}>{statusGeral.label}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[10px] text-slate-400 mt-1.5 italic">* Estoque disponível = valor de venda dos SKUs em estoque. A entregar = pedidos de compra confirmados ainda não recebidos.</p>
            </div>
          </div>
        );
      }

      case 'sugestao_compra': {
        const coberturaIdeal = 2; // múltiplo do lead time
        return (
          <div className="flex flex-col h-full pt-6 pb-12 px-8 md:px-14 animate-fadeIn w-full gap-3">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-1">{slide.title}</h2>
              <p className="text-base text-slate-500">{slide.subtitle}</p>
            </div>

            {/* Params */}
            <div className="grid grid-cols-3 gap-3 flex-shrink-0">
              {slide.params.map((p, idx) => {
                const colors = [
                  { bg: 'bg-blue-50', border: 'border-blue-200', label: 'text-blue-500', value: 'text-blue-800' },
                  { bg: 'bg-green-50', border: 'border-green-200', label: 'text-green-600', value: 'text-green-800' },
                  { bg: 'bg-slate-50', border: 'border-slate-200', label: 'text-slate-500', value: 'text-slate-800' },
                ];
                const c = colors[idx];
                return (
                  <div key={idx} className={`${c.bg} border ${c.border} rounded-xl px-4 py-3`}>
                    <p className={`text-[10px] font-bold uppercase tracking-wide ${c.label} mb-0.5`}>{p.label}</p>
                    <p className={`text-xl font-extrabold ${c.value} leading-tight`}>{p.value}</p>
                    <p className="text-[11px] text-slate-400 leading-snug mt-1">{p.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Table */}
            <div className="flex-1 flex flex-col min-h-0">
              <div className="flex items-center gap-2 mb-1.5">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">{slide.category.name}</p>
                <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">Curva {slide.category.curve}</span>
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm flex-1">
                <table className="text-xs w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-700 text-white font-semibold">
                      <th className="px-3 py-2 text-left">SKU</th>
                      <th className="px-3 py-2 text-left border-l border-blue-600">Referência</th>
                      <th className="px-3 py-2 text-right border-l border-blue-600">Estoque</th>
                      <th className="px-3 py-2 text-right border-l border-blue-600">Venda/dia</th>
                      <th className="px-3 py-2 text-right border-l border-blue-600">Lead time</th>
                      <th className="px-3 py-2 text-right border-l border-blue-600">Cobertura atual</th>
                      <th className="px-3 py-2 text-right border-l border-blue-500 bg-green-700">Sugestão</th>
                      <th className="px-3 py-2 text-right border-l border-blue-500 bg-green-700">Investimento</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slide.category.items.map((item, idx) => {
                      const cobIdeal = coberturaIdeal * item.leadtime;
                      const statusCob = item.coberturaAtual === 0
                        ? { bg: 'bg-red-50', text: 'text-red-700', badge: 'bg-red-100 text-red-700' }
                        : item.coberturaAtual < item.leadtime
                        ? { bg: 'bg-orange-50', text: 'text-orange-700', badge: 'bg-orange-100 text-orange-700' }
                        : { bg: '', text: 'text-slate-700', badge: '' };
                      const investimento = (item.sugestao * item.custo).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                      return (
                        <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} ${statusCob.bg} hover:bg-blue-50/30 transition-colors`}>
                          <td className="px-3 py-1.5 font-mono text-slate-400 whitespace-nowrap">{item.sku}</td>
                          <td className="px-3 py-1.5 font-semibold text-slate-700 border-l border-slate-100 whitespace-nowrap">{item.name}</td>
                          <td className={`px-3 py-1.5 text-right font-bold border-l border-slate-100 ${item.estoque === 0 ? 'text-red-600' : 'text-slate-700'}`}>{item.estoque}</td>
                          <td className="px-3 py-1.5 text-right text-slate-600 border-l border-slate-100">{item.vendaDia.toFixed(1)}</td>
                          <td className="px-3 py-1.5 text-right text-slate-600 border-l border-slate-100">{item.leadtime}d</td>
                          <td className="px-3 py-1.5 text-right border-l border-slate-100">
                            <span className={`inline-block px-1.5 py-0.5 rounded font-bold ${item.coberturaAtual === 0 ? 'bg-red-100 text-red-700' : item.coberturaAtual < item.leadtime ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-600'}`}>
                              {item.coberturaAtual}d
                            </span>
                            <span className="text-slate-300 ml-1 text-[10px]">/{cobIdeal}d</span>
                          </td>
                          <td className="px-3 py-1.5 text-right font-bold text-green-700 border-l border-slate-100 bg-green-50/40">{item.sugestao} un</td>
                          <td className="px-3 py-1.5 text-right font-bold text-green-800 border-l border-slate-100 bg-green-50/40 whitespace-nowrap">{investimento}</td>
                        </tr>
                      );
                    })}
                    <tr className="bg-green-700 text-white font-bold border-t-2 border-green-800">
                      <td colSpan={6} className="px-3 py-2 text-right">Total do pedido</td>
                      <td className="px-3 py-2 text-right border-l border-green-600">
                        {slide.category.items.reduce((s, i) => s + i.sugestao, 0)} un
                      </td>
                      <td className="px-3 py-2 text-right border-l border-green-600 whitespace-nowrap">
                        {slide.category.items.reduce((s, i) => s + i.sugestao * i.custo, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      }

      case 'data_health':
        return (
          <div className="flex flex-col h-full pt-6 pb-12 px-8 md:px-14 animate-fadeIn w-full">
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-slate-900 mb-1">{slide.title}</h2>
              <p className="text-base text-slate-500">{slide.subtitle}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 flex-1 content-center">
              {slide.checks.map((check, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-3.5 hover:border-amber-300 hover:bg-amber-50/30 transition-colors">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mt-0.5">
                    <AlertTriangle size={13} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 leading-tight">{check.label}</p>
                    <p className="text-xs text-slate-500 leading-snug mt-0.5">{check.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'stock_status': {
        const dotClass = { saudavel: 'bg-green-500', encalhado: 'bg-amber-400', ruptura: 'bg-orange-500', critico: 'bg-red-500' };
        return (
          <div className="flex flex-col h-full pt-8 pb-14 px-8 md:px-16 animate-fadeIn w-full">
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-slate-900 mb-1">{slide.title}</h2>
              <p className="text-base text-slate-500">{slide.subtitle}</p>
            </div>
            <div className="flex gap-6 flex-1 min-h-0">
              {/* Table */}
              <div className="flex flex-col flex-shrink-0 justify-center">
                <table className="text-xs border-collapse rounded-xl overflow-hidden shadow-sm border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100 text-slate-600 font-semibold">
                      <th className="px-3 py-2 text-left">Status</th>
                      <th className="px-3 py-2 text-center border-l border-slate-200" colSpan={2}>Total</th>
                      <th className="px-3 py-2 text-center border-l border-slate-200 bg-blue-50 text-blue-700" colSpan={2}>A</th>
                      <th className="px-3 py-2 text-center border-l border-slate-200" colSpan={2}>B</th>
                      <th className="px-3 py-2 text-center border-l border-slate-200" colSpan={2}>C</th>
                    </tr>
                    <tr className="bg-slate-50 text-slate-500 font-medium text-[11px]">
                      <th className="px-3 py-1 text-left"></th>
                      <th className="px-3 py-1 text-right border-l border-slate-200">Qtd</th>
                      <th className="px-3 py-1 text-right">%</th>
                      <th className="px-3 py-1 text-right border-l border-slate-200 bg-blue-50">Qtd</th>
                      <th className="px-3 py-1 text-right bg-blue-50">%</th>
                      <th className="px-3 py-1 text-right border-l border-slate-200">Qtd</th>
                      <th className="px-3 py-1 text-right">%</th>
                      <th className="px-3 py-1 text-right border-l border-slate-200">Qtd</th>
                      <th className="px-3 py-1 text-right">%</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slide.tableData.rows.map((row, idx) => (
                      <tr key={row.key} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                        <td className="px-3 py-2 font-semibold text-slate-700 flex items-center gap-1.5 whitespace-nowrap">
                          <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${dotClass[row.key]}`}></span>
                          {row.label}
                        </td>
                        <td className="px-3 py-2 text-right text-slate-700 border-l border-slate-100 font-medium">{row.total}</td>
                        <td className="px-3 py-2 text-right text-slate-400">{row.pct}</td>
                        <td className="px-3 py-2 text-right text-blue-700 border-l border-slate-100 font-medium bg-blue-50/40">{row.a}</td>
                        <td className="px-3 py-2 text-right text-blue-400 bg-blue-50/40">{row.pctA}</td>
                        <td className="px-3 py-2 text-right text-slate-700 border-l border-slate-100 font-medium">{row.b}</td>
                        <td className="px-3 py-2 text-right text-slate-400">{row.pctB}</td>
                        <td className="px-3 py-2 text-right text-slate-700 border-l border-slate-100 font-medium">{row.c}</td>
                        <td className="px-3 py-2 text-right text-slate-400">{row.pctC}</td>
                      </tr>
                    ))}
                    <tr className="bg-slate-100 font-bold text-slate-700 border-t border-slate-200">
                      <td className="px-3 py-2">Total</td>
                      <td className="px-3 py-2 text-right border-l border-slate-200">{slide.tableData.totals.total}</td>
                      <td></td>
                      <td className="px-3 py-2 text-right text-blue-700 border-l border-slate-200 bg-blue-50/40">{slide.tableData.totals.a}</td>
                      <td className="bg-blue-50/40"></td>
                      <td className="px-3 py-2 text-right border-l border-slate-200">{slide.tableData.totals.b}</td>
                      <td></td>
                      <td className="px-3 py-2 text-right border-l border-slate-200">{slide.tableData.totals.c}</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Status cards */}
              <div className="grid grid-cols-2 gap-3 flex-1 min-h-0 content-center">
                {slide.statuses.map((s) => (
                  <div key={s.key} className={`${s.bgColor} border ${s.borderColor} rounded-xl p-3.5 flex flex-col gap-1.5`}>
                    <div className="flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full flex-shrink-0 ${s.dotColor}`}></span>
                      <span className={`font-bold text-sm ${s.textColor}`}>{s.label}</span>
                    </div>
                    <p className="text-xs text-slate-700 font-medium leading-snug">{s.definition}</p>
                    <p className="text-[11px] text-slate-500 italic leading-snug border-t border-slate-200/60 pt-1.5">Ex: {s.example}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }

      default:
        return <div>Slide desconhecido</div>;
    }
  };

  return (
    <div className="w-screen h-screen bg-slate-100 flex items-center justify-center font-sans text-slate-900 p-6">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col relative" style={{ height: 'calc(100vh - 3rem)', aspectRatio: '16 / 9' }}>
        <div className="w-full h-full flex relative">
          <div className="w-24 bg-blue-900 flex flex-col items-center py-8 justify-between flex-shrink-0">
            <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-inner">S</div>
            <div className="text-blue-300/40 font-mono text-xs rotate-180 [writing-mode:vertical-rl] py-12">STOIQ INTELLIGENCE</div>
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
          </div>
          <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-white to-slate-50">
            <div className="absolute top-6 right-8 text-sm font-semibold text-slate-400">
              {currentSlide + 1} / {slides.length}
            </div>
            <div className="h-full w-full p-8 md:p-12 flex flex-col items-center justify-center">
              <div className="w-full h-full flex items-center justify-center">
                <SlideContent slide={slides[currentSlide]} />
              </div>
            </div>
            <div className="absolute bottom-8 right-8 flex gap-4">
              <button onClick={prevSlide} disabled={currentSlide === 0} className="p-3 rounded-full bg-white shadow-lg border border-slate-200 text-slate-600 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="p-3 rounded-full bg-blue-600 shadow-lg shadow-blue-200 text-white hover:bg-blue-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
