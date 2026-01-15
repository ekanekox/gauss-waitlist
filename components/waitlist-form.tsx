'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, CheckCircle2, Send, Sparkles } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { addToWaitlist } from '@/lib/supabase'
import { trackEvent, identifyUser, EVENTS } from '@/lib/posthog'

const formSchema = z.object({
  email: z
    .string()
    .min(1, 'Email é obrigatório')
    .email('Email inválido'),
})

type FormData = z.infer<typeof formSchema>

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function WaitlistForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [focused, setFocused] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onFocus = () => {
    setFocused(true)
    trackEvent(EVENTS.WAITLIST_FORM_START)
  }

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    trackEvent(EVENTS.WAITLIST_FORM_SUBMIT, { email: data.email })

    const result = await addToWaitlist({
      email: data.email,
      source: 'landing_page',
    })

    if (result.success) {
      setStatus('success')
      identifyUser(data.email, { source: 'waitlist' })
      trackEvent(EVENTS.WAITLIST_FORM_SUCCESS, { email: data.email })
      toast.success('Você está na lista! 🎉', {
        description: 'Enviaremos um email quando liberarmos seu acesso.',
      })
      reset()
    } else if (result.error === 'email_exists') {
      setStatus('idle')
      trackEvent(EVENTS.WAITLIST_FORM_DUPLICATE, { email: data.email })
      toast.info('Você já está na lista!', {
        description: 'Fique tranquilo, não esquecemos de você.',
      })
    } else {
      setStatus('error')
      trackEvent(EVENTS.WAITLIST_FORM_ERROR, { email: data.email, error: result.error })
      toast.error('Ops, algo deu errado', {
        description: 'Tente novamente em alguns segundos.',
      })
      setTimeout(() => setStatus('idle'), 2000)
    }
  }

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex items-center justify-center gap-3 bg-brand-50 border border-brand-200 text-brand-700 px-6 py-4 rounded-xl"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-medium">Perfeito! Você está na lista.</span>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="relative"
          >
            {/* Glow effect when focused */}
            <div
              className={`absolute -inset-1 bg-gradient-to-r from-brand-500 to-emerald-500 rounded-2xl blur-lg transition-opacity duration-300 ${
                focused ? 'opacity-20' : 'opacity-0'
              }`}
            />

            <div className="relative flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  {...register('email')}
                  onFocus={onFocus}
                  onBlur={() => setFocused(false)}
                  error={!!errors.email}
                  disabled={status === 'loading'}
                  className="h-14 text-base"
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-2 text-left"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </div>

              <Button
                type="submit"
                disabled={status === 'loading'}
                size="lg"
                className="h-14 px-8 group"
              >
                {status === 'loading' ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <span>Quero acesso</span>
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Trust badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-center justify-center gap-4 mt-4 text-xs text-steel-400"
      >
        <div className="flex items-center gap-1">
          <Sparkles className="w-3 h-3" />
          <span>Sem spam</span>
        </div>
        <span>•</span>
        <span>Cancele quando quiser</span>
      </motion.div>
    </div>
  )
}
