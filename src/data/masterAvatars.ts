const modules = import.meta.glob('/images/masters/*.jpg', {
    eager: true,
    // Vite v5 style: returns string URLs
    query: '?url',
    import: 'default',
});

type MasterAvatar = { name: string; logo: string };

function toNiceName(filePath: string): string {
    const base = filePath.split('/').pop() || '';
    const withoutExt = base.replace(/\.[^.]+$/, '');
    // strip trailing "-logo" or "logo" (case-insensitive)
    const withoutAvatar = withoutExt.replace(/-?logo$/i, '');
    // normalize separators to spaces
    const normalized = withoutAvatar.replace(/[_-]+/g, ' ');
    // insert space between camelCase words: GoogleAds -> Google Ads
    const spaced = normalized.replace(/([a-z])([A-Z])/g, '$1 $2');
    const trimmed = spaced.trim().replace(/\s{2,}/g, ' ');
    // Title case each word
    return trimmed.replace(/\b\w/g, (m) => m.toUpperCase());
}

export const logos: MasterAvatar[] = Object.entries(modules)
    .map(([path, url]) => ({ name: toNiceName(path), logo: url as string }))
    // Keep only a stable subset first (you can remove slice to include all)
    .sort((a, b) => a.name.localeCompare(b.name));

export type { MasterAvatar };

