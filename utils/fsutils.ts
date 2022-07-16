export const getDrawaboxEntries = async () => {
  const entries: string[] = [];

  for await (const dirEntry of Deno.readDir("static/")) {
    if (dirEntry.name.includes(`drawabox_`)) {
      entries.push(dirEntry.name);
    }
  }

  return entries;
};