'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Passei 3 horas procurando um problema de falha intermitente. Com o Gauss, teria resolvido em 10 minutos.',
    author: 'João Marcelo',
    role: 'Mecânico há 15 anos',
    location: 'São Paulo, SP',
    avatar: 'JM',
  },
  {
    quote:
      'A precisão é impressionante. Ele sugeriu checar o sensor de temperatura que eu nem tinha considerado. Era isso mesmo.',
    author: 'Roberto Carlos',
    role: 'Dono de oficina',
    location: 'Belo Horizonte, MG',
    avatar: 'RC',
  },
  {
    quote:
      'Finalmente uma ferramenta que entende como mecânico pensa. Não preciso traduzir para linguagem técnica.',
    author: 'Anderson Lima',
    role: 'Eletricista automotivo',
    location: 'Curitiba, PR',
    avatar: 'AL',
  },
]

const stats = [
  { value: '85%', label: 'Precisão média' },
  { value: '<5s', label: 'Tempo de resposta' },
  { value: '1M+', label: 'Casos analisados' },
  { value: '50+', label: 'Marcas cobertas' },
]

export function SocialProof() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-steel-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        {/* Stats */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-steel-400 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12"
        >
          <span className="text-brand-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Beta testers
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            O que mecânicos estão dizendo
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-brand-400 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-steel-200 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-emerald-500 flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-steel-400">
                    {testimonial.role} • {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
