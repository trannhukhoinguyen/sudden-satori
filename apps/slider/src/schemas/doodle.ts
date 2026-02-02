import { z } from "astro:content";

export const DoodleMetadata = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  endDate: z.coerce.date(),
});

export type Doodle = z.infer<typeof DoodleMetadata>;
