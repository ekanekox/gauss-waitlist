'use client'

import { motion } from 'framer-motion'
import { Gauge, Twitter, Linkedin, Instagram, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-steel-900 text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="bg-gradient-to-br from-brand-500 to-emerald-500 p-2 rounded-xl">
              <Gauge className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">Gauss</span>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <a
              href="mailto:contato@gauss.to"
              className="text-steel-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/gauss_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-steel-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/company/gauss-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-steel-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/gauss_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-steel-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-steel-400 text-sm"
          >
            © {currentYear} Gauss. Todos os direitos reservados.
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
