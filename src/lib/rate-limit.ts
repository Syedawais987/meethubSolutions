const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export function rateLimit(
  ip: string,
  limit = 5,
  windowMs = 3600000 // 1 hour
): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (entry.count >= limit) return false;
  entry.count++;
  return true;
}
