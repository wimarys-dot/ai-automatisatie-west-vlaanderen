interface Env {
  FEATHERLESS_API_KEY: string;
  ALLOWED_ORIGINS: string;
}

const FEATHERLESS_BASE_URL = 'https://api.featherless.ai/v1';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return handleCORS(request, env);
    }

    // Validate origin
    const origin = request.headers.get('Origin') || '';
    const allowedOrigins = env.ALLOWED_ORIGINS.split(',').map(o => o.trim());

    // Check if origin matches allowed list or is a subdomain of pages.dev
    const isAllowed = allowedOrigins.some(allowed => origin === allowed) ||
      origin.endsWith('.ai-automatisatie.pages.dev') ||
      origin === 'https://ai-automatisatie.pages.dev' ||
      origin.endsWith('.n8n-automatisatie.pages.dev') ||
      origin === 'https://n8n-automatisatie.pages.dev' ||
      origin.endsWith('.n8n-expert.pages.dev') ||
      origin === 'https://n8n-expert.pages.dev';

    if (!isAllowed) {
      return new Response('Forbidden', { status: 403 });
    }

    // Only allow POST requests
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    const url = new URL(request.url);
    const path = url.pathname;

    // Supported endpoints
    const allowedPaths = ['/chat/completions', '/completions', '/models'];
    if (!allowedPaths.some(p => path === p || path === `/v1${p}`)) {
      return new Response('Endpoint not supported', { status: 400 });
    }

    try {
      // Forward request to Featherless
      const targetPath = path.startsWith('/v1') ? path : `/v1${path}`;
      const body = await request.json();

      const response = await fetch(`${FEATHERLESS_BASE_URL}${targetPath.replace('/v1', '')}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${env.FEATHERLESS_API_KEY}`,
        },
        body: JSON.stringify(body),
      });

      const data = await response.text();

      return new Response(data, {
        status: response.status,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': origin,
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    } catch (error) {
      console.error('Proxy error:', error);
      return new Response(JSON.stringify({ error: 'Proxy error' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': origin,
        },
      });
    }
  },
};

function handleCORS(request: Request, env: Env): Response {
  const origin = request.headers.get('Origin') || '';
  const allowedOrigins = env.ALLOWED_ORIGINS.split(',').map(o => o.trim());

  const isAllowed = allowedOrigins.some(allowed => origin === allowed) ||
    origin.endsWith('.ai-automatisatie.pages.dev') ||
    origin === 'https://ai-automatisatie.pages.dev';

  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': isAllowed ? origin : '',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
}
