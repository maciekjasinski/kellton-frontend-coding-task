import { MinifigType } from '@/types/minifig';
import axios from 'axios';

export const fetchMinifigs = async () => {
  return await axios
    .get(`https://rebrickable.com/api/v3/lego/minifigs/?key=${import.meta.env.VITE_REBRICKABLE_API_KEY}&page_size=3`)
    .then((res) => {
      return res.data.results.map(
        (each: { name: string; set_img_url: string | null; set_url: string; set_num: number }) => {
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
