import { headers } from 'next/headers'

export async function getLang(): Promise<'en' | 'en-gb'> {
  const h = await headers()
  const acceptLanguage = h.get('accept-language') || ''
  const isExplicitlyUS = acceptLanguage.toLowerCase().startsWith('en-us')
  return isExplicitlyUS ? 'en' : 'en-gb'
}
