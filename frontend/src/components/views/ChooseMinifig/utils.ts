import { MinifigType } from '@/types/minifig';
import axios from 'axios';

const getRandomId = (arrayLength: number) => {
  const uniqueIds = new Set<number>();

  while (uniqueIds.size < 3) {
    const id = Math.floor(Math.random() * arrayLength);
    uniqueIds.add(id);
  }

  return Array.from(uniqueIds);
}

export const fetchMinifigs = async () => {
  return await axios
    .get(`https://rebrickable.com/api/v3/lego/minifigs/?key=${import.meta.env.VITE_REBRICKABLE_API_KEY}&page_size=1000&in_theme_id=${import.meta.env.VITE_HARRY_POTTER_THEME_ID}`)
    .then((res) => {
      const randomIds = getRandomId(res.data.count);
      const randomMinifigs = randomIds.map((id: number) => res.data.results[id]);
      return randomMinifigs.map(
        (each: { name: string; set_img_url: string | null; set_url: string; set_num: string }) => {
          return {
            name: each.name,
            picture: each.set_img_url || null,
            detailsUrl: each.set_url,
            setId: each.set_num,
          };
        },
      ) as MinifigType[];
    }).catch(() => {
      return [];
    })
};
