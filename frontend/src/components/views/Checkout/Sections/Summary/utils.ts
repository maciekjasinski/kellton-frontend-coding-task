import axios from 'axios';

export const fetchParts = (set_id: string) => {
  return axios
    .get(
      `https://rebrickable.com/api/v3/lego/minifigs/${set_id}/parts/?key=${import.meta.env.VITE_REBRICKABLE_API_KEY}`,
    )
    .then((res) => {
      return res.data.results.map((each: any) => {
        const { part } = each;
        return {
          id: part.part_num,
          name: part.name,
          picture: part.part_img_url || null,
        };
      });
    });
};
