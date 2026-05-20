import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import languageDetector from './languageDetector'

type LanguageDetector = {
  detect: () => string
  cache: (lng: string) => void
}

export const useRedirect = (to?: string) => {
  const router = useRouter()
  const target = to || router.asPath

  useEffect(() => {
    const detector = languageDetector as unknown as LanguageDetector
    const detectedLng = detector.detect()

    if (target.startsWith('/' + detectedLng) && router.route === '/404') {
      // prevent endless loop
      router.replace('/' + detectedLng + router.route)
      return
    }

    detector.cache(detectedLng)
    router.replace('/' + detectedLng + target)
    // eslint-disable-next-line no-undef
    document.documentElement.lang = detectedLng
    // intentionally no deps on router to mimic previous behavior
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target])

  return null
}

export const Redirect: React.FC = () => {
  useRedirect()
  return null
}

export const getRedirect = (to?: string) => () => {
  useRedirect(to)
  return null
}
