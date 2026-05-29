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
    const detectedLng = languageDetector.detect()
    console.log("Detected language:", detectedLng, "target", target, "current route", router.route);
    if (target.startsWith('/' + detectedLng) && router.route === '/404') {
      // prevent endless loop
      router.replace('/' + detectedLng + router.route)
      return
    }

    
    router.replace('/' + detectedLng + target)
    // eslint-disable-next-line no-undef
    if (detectedLng && languageDetector?.cache) {       
        languageDetector.cache(detectedLng);
        document.documentElement.lang = detectedLng
    }
    // intentionally no deps on router to mimic previous behavior
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
