import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Minting a refresh token exposes it — dev-only helper.
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "not available in production" }, { status: 404 });
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    return NextResponse.json({ error: "set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET first" }, { status: 500 });
  }

  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  if (!code) {
    return NextResponse.json({ error: "missing ?code=" }, { status: 400 });
  }

  // Must match the redirect_uri used in the authorize request (127.0.0.1, not localhost).
  const { protocol, hostname, port } = new URL(request.url);
  const host = hostname === "localhost" ? "127.0.0.1" : hostname;
  const redirect = `${protocol}//${host}${port ? `:${port}` : ""}/api/spotify/callback`;

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: redirect,
    }),
  });

  if (!res.ok) {
    return new Response(`Exchange failed: ${res.status} ${await res.text()}`, { status: 500 });
  }

  const data = await res.json();
  return new Response(
    `Paste into .env.local:\n\nSPOTIFY_REFRESH_TOKEN=${data.refresh_token || "(none returned — token already minted; regenerate via /api/spotify/auth)"}`,
    { headers: { "Content-Type": "text/plain" } },
  );
}