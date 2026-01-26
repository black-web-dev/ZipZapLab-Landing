import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { motion } from 'framer-motion'; // motion is used via motion.div throughout the component
import {
  MessageSquare,
  Users,
  Paperclip,
  Settings,
  Menu,
  User,
  TrendingUp,
  Smile,
  BarChart3,
  ChevronDown
} from 'lucide-react';
import TypingIndicator from '../TypingIndicator';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceArea,
  ReferenceLine
} from 'recharts';

const sidebarItems = [
  { icon: MessageSquare, label: 'Диалоги', active: true },
  { icon: BarChart3, label: 'Администрация', active: false },
  { icon: Paperclip, label: 'Вес о записи', active: false },
  { icon: Settings, label: 'Настройка', active: false },
  { icon: Menu, label: 'FAQ Ресурсы', active: false },
  { icon: User, label: 'Операторы', active: false },
];

const messages = [
  {
    type: 'ai',
    text: 'Для интеграции с CRM перейдите в Настройки → Интеграции → CRM. Подробная инструкция доступна в документации.',
    items: [
      'Подключить к коммутатору линии LU и GND от блока вызова.',
      'Установить джампер на коммутаторе в положение 0 для перевода в режим программирования.',
    ]
  },
  {
    type: 'user',
    text: 'А, если нет напряжения?',
    initial: 'ЛМ'
  },
  {
    type: 'ai',
    text: '',
  },
];

// Chart data matching the image
const chartData = [
  { x: 0, teal: 5, magenta: 5 },
  { x: 20, teal: 100, magenta: 45 },
  { x: 40, teal: 35, magenta: 80 },
  { x: 60, teal: 120, magenta: 90 },
  { x: 80, teal: 80, magenta: 120 },
  { x: 100, teal: 180, magenta: 155 },
  { x: 110, teal: 130, magenta: 160 },
  { x: 120, teal: 120, magenta: 145 }
];

const generateParticles = () => {
  return Array.from({ length: 40 }).map(() => ({
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    opacity: Math.random() * 0.4 + 0.2,
    color: Math.random() > 0.5 
      ? 'rgba(139, 92, 246, 1)' // Purple - fully opaque
      : 'rgba(59, 130, 246, 1)', // Blue - fully opaque
  }));
};

const particles = generateParticles();

export default function IOSPhoneComponent() {

  return (
    <div className="relative w-full max-w-[380px] mx-auto">

      {/* iOS Device Frame */}
      <div className="relative z-10">
        {/* Additional Purple Glow Layer - behind the phone */}
        <div 
          className="absolute inset-0 blur-xl opacity-50 -z-10"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(153, 109, 208, 0.8) 0%, rgba(177, 141, 224, 0.8) 40%, transparent 80%)',
            transform: 'scale(1.1)',
            top: '-10%',
            left: '-10%',
            right: '-10%',
            bottom: '-10%',
          }}
        ></div>
        
        <img
          src="/device.png"
          alt="iOS Device"
          className="w-full h-full relative z-0"
          style={{
            filter: 'drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.9)) drop-shadow(0px 0px 20px rgba(177, 141, 224, 0.8)) drop-shadow(0px 0px 50px rgba(153, 109, 208, 0.6))',
          }}
        />

        {/* Screen Content - positioned absolutely over the device */}
        <div
          className="absolute top-5 left-5 right-5 bottom-5 flex flex-col z-10"
          style={{ clipPath: 'url(#viewport-mask1)' }}
        >
          <div className="flex items-center justify-between px-2 pt-10 pb-2 bg-linear-to-r from-[#0F0E20] via-[#1B1430] to-[#0F0E20]">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            </div>
            <h3 className="text-[#f5f5f5a4] text-[10px] font-medium text-center flex-1">ZipZap Agent - Панель управления</h3>
            <div className="w-8"></div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex overflow-hidden rounded-b-[40px]">
            {/* Sidebar */}
            <div className="w-[110px] bg-linear-to-br from-[#18537B]/50 via-[#202451]/50 to-[#45206A]/50 from backdrop-blur-md border-r border-black/10 flex flex-col py-7">
              {sidebarItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className="relative flex flex-row items-center gap-2 py-2 px-2 mx-0.5 cursor-pointer group"
                  >
                    {item.active && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 rounded-sm bg-linear-to-r from-[#18537B]/50 to-transparent p-px"
                        initial={false}
                      ><div className='absolute inset-px rounded-sm bg-[#353457a1]'></div></motion.div>
                    )}
                    <Icon
                      className={`w-4 h-4 relative z-10 shrink-0 drop-shadow-[0_0_4px_rgba(139,233,252,0.6)] ${item.active
                        ? 'text-[#8BE9FC]'
                        : 'text-neutral-300/90 group-hover:text-neutral-300'
                        }`}
                    />
                    <span className={`leading-tight relative z-10 ${item.active
                      ? 'text-[10px] text-[#8BE9FC] font-bold'
                      : 'text-[9px] text-neutral-300/90'
                      }`}>
                      {item.label}
                    </span>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="mt-auto mx-1.5 mb-3"
              >
                <div 
                  className="relative rounded-md bg-linear-to-r from-[#18537B]/50 to-transparent p-px"
                >
                  <div className="flex items-center gap-2.5 bg-[#353457d5] rounded-md p-1">
                    {/* Person Icon */}
                    <div className="shrink-0 border border-[#8BE9FC]/90 rounded-full p-1">
                      <User className="w-5 h-5 text-[#8BE9FC] drop-shadow-[0_0_4px_rgba(139,233,252,0.6)]" />
                    </div>
                    {/* Text Content */}
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="text-[12px] font-bold text-neutral-300/90 leading-tight">24/7</span>
                      <span className="text-[9px] text-neutral-300/90 leading-tight mt-0.5">Закалист</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
            </div>

            {/* Message Section */}
            <div className="flex-1 bg-[#0A0C26] backdrop-blur-sm relative overflow-hidden">
              {/* Particle Background Effect */}
              <div className="absolute inset-0 pointer-events-none">
                {particles.map((particle, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                      width: `${particle.size}px`,
                      height: `${particle.size}px`,
                      left: `${particle.left}%`,
                      top: `${particle.top}%`,
                      background: `radial-gradient(circle, ${particle.color}, transparent)`,
                      boxShadow: `0 0 ${particle.size * 2}px ${particle.size * 0}px ${particle.color}`,
                      opacity: Math.min(particle.opacity, 1),
                    }}
                  />
                ))}
              </div>
              {/* Messages */}
              <div className="flex flex-col justify-end p-2 space-y-2.5 overflow-y-auto h-full pb-36">
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + idx * 0.2 }}
                    className={`flex gap-1.5 items-start ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.type === 'ai' && (
                      <div className="w-6 h-6 rounded-full bg-[#1FA0D5] flex items-center justify-center shrink-0 mb-1">
                        <span className="text-black text-[10px] font-bold">AI</span>
                      </div>
                    )}
                    <div className={`max-w-[72%] h-full min-h-[30px] rounded-md p-px ${msg.type === 'ai'
                      ? 'bg-linear-to-tr from-[#48739A] to-[#202441]'
                      : 'bg-linear-to-br from-[#202441] to-[#6F4D91]'
                      }`}>
                      <div className={`flex flex-col justify-center w-full h-full rounded-md px-2.5 py-2 ${msg.type === 'ai'
                        ? 'bg-[linear-gradient(70deg,rgba(24,83,123,0.9),20%,#1B1B36)] text-[#f5f5f5]'
                        : 'bg-[linear-gradient(100deg,#1B1B36,60%,rgba(69,32,106,0.5))] text-[#f5f5f5]'
                        }`}>
                        {msg.text ? (
                          <p className="text-[10px] leading-relaxed text-neutral-300">{msg.text}</p>
                        ) : (
                          <TypingIndicator color="#f5f5f5" size={4} spacing={3} />
                        )}
                        {msg.items && (
                          <ul className="mt-1.5 space-y-1 text-[10px] opacity-90 list-none">
                            {msg.items.map((item, i) => (
                              <li key={i} className="leading-relaxed">
                                <div className='flex gap-1'>
                                  <div>{i + 1}.</div>
                                  <div>{item}</div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                    {msg.type === 'user' && (
                      <div className="w-6 h-6 rounded-full bg-[#6029DC] flex items-center justify-center shrink-0 mb-1">
                        <span className="text-[#f5f5f5] text-[10px] font-medium">{msg.initial}</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              { /* Status Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-2 right-2 rounded-lg p-px bg-linear-to-r from-[#48739A] via-[#202441] to-[#6F4D91]"
              >
                <div className="rounded-[10px] py-3 flex justify-between items-center gap-2 backdrop-blur-sm bg-linear-to-r from-[#18537B]/50 via-[#202451]/90 to-[#45206A]/50">
                  {/* First Section */}
                  <div className="flex flex-col items-center flex-1">
                    <p className="text-xl font-semibold text-[#8BE9FC] leading-tight">1,247</p>
                    <p className="text-[9px] text-[#94a3b8] font-normal">Довгатане</p>
                  </div>

                  {/* Second Section */}
                  <div className="flex flex-col items-center flex-1">
                    <p className="text-xl font-semibold text-[#9590CE] leading-tight">94.2%</p>
                    <p className="text-[9px] text-[#94a3b8] font-normal">Темоакте</p>
                  </div>

                  {/* Third Section */}
                  <div className="flex flex-col items-center flex-1">
                    <p className="text-xl font-semibold text-[#A78BFA] leading-tight">2.3s</p>
                    <p className="text-[9px] text-[#9E74D0] font-normal">Время ответа</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

        {/* 99.9% Uptime Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute top-24 -right-2 rounded-lg px-3 py-2 flex items-center gap-2 z-20 bg-linear-to-br from-[#7FB1AE]/50 via-[#223640]/40 to-[#7FB1AE]/50 border border-[#546E71] shadow-[0_0_6px_2px_rgba(37,171,179,0.5)] backdrop-blur-sm"
        >
          <Smile className="w-6 h-6 text-[#73E79A]" />
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight text-[#73E79A]" >99.9%</span>
            <span className="text-[10px] leading-tight text-white">Uptime</span>
          </div>
        </motion.div>

        {/* Analytics Graph Overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-[28%] -left-18 rounded-lg overflow-hidden z-20 w-[240px] border-[1.5px] border-[#24787c] shadow-[0_0_10px_5px_rgba(37,171,179,0.3)]"
        >
          <div
            className="w-full h-full p-2 bg-[linear-gradient(120deg,rgba(74,95,150,0.3),80%,rgba(76,115,111,0.8))] backdrop-blur-sm"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-white text-xs">
                Аналитика
              </h4>
              <div className="flex items-center">
                <button className="px-1.5 py-0.5 bg-[#444C63]/60 backdrop-blur-sm border border-neutral-700/50 rounded-l-[3px] text-[8px] text-neutral-300 hover:text-white transition-colors">
                  Rate
                </button>
                <button className="px-1.5 py-0.5 bg-[#2D344F]/60 backdrop-blur-sm border border-neutral-700/50 rounded-r-[3px] text-[8px] text-neutral-300 hover:text-white transition-colors flex items-center gap-1">
                  Reply
                  <ChevronDown className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Graph Visualization */}
            <div className="relative h-20">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={chartData}
                  margin={{ top: 5, right: 5, left: 5, bottom: -5 }}
                  style={{ background: 'transparent' }}
                >
                  <defs>
                    <linearGradient id="highlightBar" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#5F4A9F" stopOpacity="1" />
                      <stop offset="50%" stopColor="#565FAE" stopOpacity="1" />
                      <stop offset="100%" stopColor="#7745B7" stopOpacity="1" />
                    </linearGradient>
                    <filter id="glow-cyan">
                      <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <filter id="glow-magenta">
                      <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <CartesianGrid
                    stroke="rgba(139, 92, 246, 0.2)"
                    strokeWidth={0.5}
                    horizontal={true}
                    vertical={false}
                  />
                  <XAxis
                    dataKey="x"
                    type="number"
                    domain={[0, 120]}
                    ticks={[0, 20, 40, 60, 80, 100, 120]}
                    tick={{ fill: 'rgba(156, 163, 175, 0.7)', fontSize: 7, fontFamily: 'system-ui, -apple-system' }}
                    axisLine={false}
                    tickLine={false}
                    tickMargin={5}
                  />
                  <YAxis
                    type="number"
                    domain={[0, 200]}
                    ticks={[0, 50, 100, 150, 200]}
                    tick={{ fill: 'rgba(156, 163, 175, 0.7)', fontSize: 7, fontFamily: 'system-ui, -apple-system' }}
                    axisLine={false}
                    tickLine={false}
                    tickMargin={5}
                    width={20}
                  />
                  {/* Horizontal grid lines at each Y-axis tick value */}
                  <ReferenceLine y={0} stroke="rgba(139, 92, 246, 0.2)" strokeWidth={0.5} />
                  <ReferenceLine y={50} stroke="rgba(139, 92, 246, 0.2)" strokeWidth={0.5} />
                  <ReferenceLine y={100} stroke="rgba(139, 92, 246, 0.2)" strokeWidth={0.5} />
                  <ReferenceLine y={150} stroke="rgba(139, 92, 246, 0.2)" strokeWidth={0.5} />
                  <ReferenceLine y={200} stroke="rgba(139, 92, 246, 0.2)" strokeWidth={0.5} />
                  {/* Purple highlight bar at x=90 */}
                  <ReferenceArea
                    x1={85}
                    x2={95}
                    y1={0}
                    y2={200}
                    fill="url(#highlightBar)"
                    ifOverflow="visible"
                  />
                  <Line
                    type="monotone"
                    dataKey="teal"
                    stroke="#25ABB3"
                    strokeWidth={1.5}
                    dot={false}
                    activeDot={false}
                    strokeLinecap="round"
                    filter="url(#glow-cyan)"
                    opacity={0.7}
                  />
                  <Line
                    type="monotone"
                    dataKey="magenta"
                    stroke="#742ACA"
                    strokeWidth={1.5}
                    dot={false}
                    activeDot={false}
                    strokeLinecap="round"
                    filter="url(#glow-magenta)"
                    opacity={0.7}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Stats */}
            <div className="flex justify-between">
              <div className='flex flex-col items-center'>
                <p className="text-white font-medium text-sm">1,247</p>
                <p className="text-neutral-400 text-[7px]">Достаточно</p>
              </div>
              <div className='flex flex-col items-center'>
                <p className="text-white font-medium text-sm">94.2%</p>
                <p className="text-neutral-400 text-[7px]">Точность</p>
              </div>
              <div className='flex flex-col items-center'>
                <p className="text-white font-medium text-sm">2.3s</p>
                <p className="text-neutral-400 text-[7px]">Время ответа</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* SVG ClipPath for viewport mask - iPhone screen shape with notch */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <clipPath id="viewport-mask1" clipPathUnits="objectBoundingBox">
            {/* iPhone screen path with rounded corners and notch */}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.159 0H0.302C0.308 0 0.314 0.002 0.314 0.006V0.013C0.314 0.025 0.336 0.036 0.364 0.036H0.637C0.665 0.036 0.688 0.025 0.688 0.013V0.006C0.688 0.002 0.693 0 0.699 0H0.841C0.892 0 0.931 0.003 0.961 0.015C0.991 0.029 1 0.043 1 0.073V0.807C1 0.811 1 0.813 1 0.816V0.926C1 0.952 0.992 0.968 0.962 0.985C0.933 1 0.894 1 0.842 1H0.16C0.109 1 0.07 1 0.041 0.985C0.011 0.968 0 0.952 0 0.926V0.195C0 0.192 0 0.189 0 0.186V0.073C0 0.043 0.009 0.029 0.04 0.015C0.068 0.003 0.102 0 0.159 0Z"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
