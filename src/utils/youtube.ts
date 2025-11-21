// utils/youtube.ts
// YouTube playlist parser WITHOUT API KEY
// Supports modern YouTube HTML (2024–2025)

export interface YoutubePlaylistItem {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
}

export interface YoutubePlaylistData {
  listId: string;
  videos: YoutubePlaylistItem[];
  fetchedAt: number;
}

const playlistCache = new Map<string, YoutubePlaylistData>();

export function getVideoId(url: string): string | null {
  try {
    return new URL(url).searchParams.get("v");
  } catch {
    return null;
  }
}

export function isActiveVideo(activeVideoId: string | null, videoId: string) {
  return activeVideoId === videoId;
}

export async function fetchPlaylist(listId: string): Promise<YoutubePlaylistData> {
  // Cache
  const cached = playlistCache.get(listId);
  if (cached) return cached;

  const url = `https://www.youtube.com/playlist?list=${listId}`;
  const html = await fetch(url).then(r => r.text());

  // --- Try 3 different extraction patterns ---------------------------------

  const patterns = [
    /ytInitialData"\s*:\s*(\{.*?\})\s*[,<]/s,
    /window\["ytInitialData"\]\s*=\s*(\{.*?\});/s,
    /var\s+ytInitialData\s*=\s*(\{.*?\});/s
  ];

  let jsonStr = null;

  for (const p of patterns) {
    const m = html.match(p);
    if (m?.[1]) {
      jsonStr = m[1];
      break;
    }
  }

  if (!jsonStr) {
    throw new Error("Could not extract ytInitialData (YouTube changed layout again)");
  }

  // --- Parse JSON safely ----------------------------------------------------
  let data: any;
  try {
    data = JSON.parse(jsonStr);
  } catch (err) {
    console.error("JSON parse error", err);
    throw new Error("Failed to parse ytInitialData JSON");
  }

  // --- Navigate to playlist items path --------------------------------------
  // Data path changes occasionally; we try multiple possible routes.

  const searchPaths = [
    // Most common
    "contents.twoColumnBrowseResultsRenderer.tabs.0.tabRenderer.content.sectionListRenderer.contents.0.itemSectionRenderer.contents.0.playlistVideoListRenderer.contents",

    // Fallback older structure
    "contents.twoColumnBrowseResultsRenderer.tabs.0.tabRenderer.content.sectionListRenderer.contents.0.itemSectionRenderer.contents"
  ];

  let items: any[] | null = null;

  for (const path of searchPaths) {
    const keys = path.split(".");
    let obj = data;

    try {
      for (const k of keys) obj = obj[k];
      if (Array.isArray(obj)) {
        items = obj;
        break;
      }
    } catch {
      // Continue trying next path
    }
  }

  if (!items) {
    throw new Error("Cannot find playlist items in ytInitialData");
  }

  // --- Build playlist items -------------------------------------------------
  const videos: YoutubePlaylistItem[] = [];

  for (const entry of items) {
    const v = entry.playlistVideoRenderer;
    if (!v) continue;

    const id = v.videoId;
    const title = v.title?.runs?.[0]?.text ?? "Untitled Video";

    const thumb = v.thumbnail?.thumbnails?.[0]?.url ??
      `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

    videos.push({
      id,
      title,
      thumbnail: thumb,
      url: `https://www.youtube.com/watch?v=${id}&list=${listId}`
    });
  }

  const result: YoutubePlaylistData = {
    listId,
    videos,
    fetchedAt: Date.now()
  };

  playlistCache.set(listId, result);
  return result;
}

// Wrapper for MediaArea
export async function loadYoutubePlaylist(listId: string) {
  return fetchPlaylist(listId);
}
