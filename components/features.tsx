'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Zap,
  Brain,
  Clock,
  ShieldCheck,
  Wrench,
  TrendingUp,
} from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Diagnóstico em segundos',
    description:
      'Descreva os sintomas e receba diagnósticos rankeados por probabilidade instantaneamente.',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
  },
  {
    icon: Brain,
    title: 'IA especializada',
    description:
      'Treinada em milhões de casos reais de diagnósticos automotivos de todas as marcas.',
    color: 'from-brand-500 to-emerald-500',
    bgColor: 'bg-brand-50',
  },
  {
    icon: Clock,
    title: 'Economize tempo',
    description:
      'Reduza o tempo de diagnóstico de horas para minutos. Mais carros, mais receita.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: ShieldCheck,
    title: 'Reduza erros',
    description:
      'Minimize peças trocadas desnecessariamente e retrabalho com diagnósticos precisos.',
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-50',
  },
  {
    icon: Wrench,
    title: 'Peças e tempo estimado',
    description:
      'Cada diagnóstico inclui lista de peças necessárias e estimativa de mão de obra.',
    color: 'from-rose-500 to-pink-500',
    bgColor: 'bg-rose-50',
  },
  {
    icon: TrendingUp,
    title: 'Aprenda sempre',
    description:
      'Histórico de diagnósticos e explicações técnicas para desenvolver sua expertise.',
    color: 'from-teal-500 to-green-500',
    bgColor: 'bg-teal-50',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-steel-50/50" id="features">
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Funcionalidades
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-steel-900 mb-6">
            Tudo que você precisa para{' '}
            <span className="gradient-text">diagnosticar melhor</span>
          </h2>
          <p className="text-lg text-steel-600">
            Ferramentas poderosas pensadas para a realidade do mecânico brasileiro.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-6 border border-steel-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/50 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`${feature.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon
                  className={`w-7 h-7 bg-gradient-to-br ${feature.color} [&>*]:stroke-[url(#icon-gradient)]`}
                  style={{
                    stroke: `url(#gradient-${feature.title})`,
                  }}
                />
                <svg width="0" height="0">
                  <linearGradient
                    id={`gradient-${feature.title}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{
                        stopColor: feature.color.includes('amber')
                          ? '#f59e0b'
                          : feature.color.includes('brand')
                          ? '#16a34a'
                          : feature.color.includes('blue')
                          ? '#3b82f6'
                          : feature.color.includes('violet')
                          ? '#8b5cf6'
                          : feature.color.includes('rose')
                          ? '#f43f5e'
                          : '#14b8a6',
                      }}
                    />
                  </linearGradient>
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-steel-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-steel-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover gradient border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-5`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
