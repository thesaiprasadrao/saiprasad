import { NextResponse } from "next/server";

const TOKEN_URL = "https://accounts.spotify.com/api/token";
const RECENT_URL = "https://api.spotify.com/v1/me/player/recently-played?limit=1";

let cachedToken: { access: string; expiresAt: number } | null = null;

async function getAccessToken(): Promise<string> {
  const now = Date.now();
  if (cachedToken && cachedToken.expiresAt > now) {
    return cachedToken.access;
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("missing spotify env");
  }

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  if (!res.ok) {
    throw new Error(`token refresh failed: ${res.status}`);
  }

  const data = await res.json();
  cachedToken = {
    access: data.access_token,
    expiresAt: now + data.expires_in * 1000 - 60_000,
  };
  return cachedToken.access;
}

export async function GET() {
  try {
    const token = await getAccessToken();
    const res = await fetch(RECENT_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) {
      throw new Error(`recently-played failed: ${res.status}`);
    }

    const data = await res.json();
    const item = data.items?.[0];
    if (!item) {
      return NextResponse.json({ track: null });
    }

    return NextResponse.json({
      track: item.track?.name ?? null,
      artist: item.track?.artists?.[0]?.name ?? null,
      playedAt: item.played_at ?? null,
    });
  } catch (err) {
    // Silent for the site visitor — the footer just hides the line on failure.
    return NextResponse.json({ error: "spotify unavailable" }, { status: 503 });
  }
}