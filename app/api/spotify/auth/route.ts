import { NextResponse } from "next/server";

const SCOPES = "user-read-recently-played";

// Spotify bans "localhost" as redirect URI (Apr 2025). Loopback IP literal only.
function redirectUri(request: Request) {
  const { protocol, hostname, port } = new URL(request.url);
  const host = hostname === "localhost" ? "127.0.0.1" : hostname;
  return `${protocol}//${host}${port ? `:${port}` : ""}/api/spotify/callback`;
}

export async function GET(request: Request) {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  if (!clientId) {
    return NextResponse.json({ error: "SPOTIFY_CLIENT_ID not set in .env.local" }, { status: 500 });
  }

  const params = new URLSearchParams({
    client_id: clientId,
    response_type: "code",
    redirect_uri: redirectUri(request),
    scope: SCOPES,
    show_dialog: "true",
  });

  return NextResponse.redirect(`https://accounts.spotify.com/authorize?${params}`);
}