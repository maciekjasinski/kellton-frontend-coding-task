import { MinifigCardProps } from '@/components/common/MinifigCard/MinifigCard.interface';
import axios from 'axios';

export const fetchMinifigs = () => {
  return axios
    .get(`https://rebrickable.com/api/v3/lego/minifigs/?key=${import.meta.env.VITE_REBRICKABLE_API_KEY}&page_size=3`)
    .then((res) => {
      return res.data.results.map((each: { name: string; set_img_url: string | null; set_url: string }) => {
        return {
          name: each.name,
          picture: each.set_img_url || null,
          detailsUrl: each.set_url,
        };
      }) as MinifigCardProps[];
    });
};
