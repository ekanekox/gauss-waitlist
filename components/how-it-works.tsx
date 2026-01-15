'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquare, Cpu, ListChecks, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Descreva o problema',
    description:
      'Digite os sintomas do veículo em linguagem natural. Ex: "Gol 2018 falhando em marcha lenta, luz do motor acesa"',
    example: '"Corolla 2019 com barulho na suspensão dianteira direita ao passar em buracos"',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'IA analisa',
    description:
      'Nossa IA cruza os sintomas com milhões de casos similares e padrões de falhas conhecidos.',
    example: 'Processamento em menos de 3 segundos',
  },
  {
    number: '03',
    icon: ListChecks,
    title: 'Receba diagnósticos',
    description:
      'Lista rankeada por probabilidade com causas, peças necessárias e tempo estimado de reparo.',
    example: '1. Bieleta (85%) • 2. Coxim (12%) • 3. Amortecedor (3%)',
  },
]

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding" id="how-it-works">
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
            Como funciona
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-steel-900 mb-6">
            Simples como{' '}
            <span className="gradient-text">descrever o problema</span>
          </h2>
          <p className="text-lg text-steel-600">
            Sem menus complicados, sem códigos obscuros. Apenas linguagem natural.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200 -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 border border-steel-100 hover:border-brand-200 hover:shadow-xl transition-all duration-300 h-full">
                  {/* Number badge */}
                  <div className="absolute -top-4 left-8 bg-gradient-to-br from-brand-600 to-brand-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg shadow-brand-500/30">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="bg-brand-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mt-4">
                    <step.icon className="w-8 h-8 text-brand-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-steel-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-steel-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Example */}
                  <div className="bg-steel-50 rounded-xl px-4 py-3 border border-steel-100">
                    <p className="text-sm text-steel-500 font-medium">
                      {step.example}
                    </p>
                  </div>
                </div>

                {/* Arrow connector - desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 -translate-y-1/2">
                    <div className="bg-white rounded-full p-2 border border-steel-200 shadow-sm">
                      <ArrowRight className="w-4 h-4 text-brand-500" />
                    </div>
                  </div>
                )}

                {/* Arrow connector - mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <div className="bg-white rounded-full p-2 border border-steel-200 shadow-sm rotate-90">
                      <ArrowRight className="w-4 h-4 text-brand-500" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
