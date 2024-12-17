export const encodeUrl = (url: string): string => {
  return encodeURIComponent(url);
};

export const decodeUrl = (url: string): string => {
  return decodeURIComponent(url);
};

export const parseUrl = (url: string) => {
  try {
    const parsed = new URL(url);
    return {
      protocol: parsed.protocol,
      hostname: parsed.hostname,
      pathname: parsed.pathname,
      search: parsed.search,
      hash: parsed.hash,
      params: Object.fromEntries(parsed.searchParams),
    };
  } catch (error) {
    throw new Error('Invalid URL');
  }
};

export const buildUtmUrl = (
  baseUrl: string,
  { source, medium, campaign, term, content }: {
    source: string;
    medium: string;
    campaign: string;
    term?: string;
    content?: string;
  }
): string => {
  const url = new URL(baseUrl);
  url.searchParams.set('utm_source', source);
  url.searchParams.set('utm_medium', medium);
  url.searchParams.set('utm_campaign', campaign);
  if (term) url.searchParams.set('utm_term', term);
  if (content) url.searchParams.set('utm_content', content);
  return url.toString();
};