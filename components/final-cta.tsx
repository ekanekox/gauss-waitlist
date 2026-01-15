'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { WaitlistForm } from './waitlist-form'

export function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-50/30 to-brand-50/50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-100/30 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-brand-200 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>Vagas limitadas para o beta</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-steel-900 mb-6">
            Pronto para diagnosticar{' '}
            <span className="gradient-text">mais rápido</span>?
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-steel-600 mb-10 max-w-xl mx-auto">
            Entre na lista de espera e seja um dos primeiros a usar o Gauss.
            Acesso antecipado gratuito para beta testers.
          </p>

          {/* Form */}
          <div className="max-w-md mx-auto mb-8">
            <WaitlistForm />
          </div>

          {/* Benefits list */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-steel-500">
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-brand-500" />
              <span>Acesso gratuito no beta</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-brand-500" />
              <span>Suporte prioritário</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-brand-500" />
              <span>Desconto vitalício</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
