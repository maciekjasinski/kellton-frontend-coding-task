import { describe, it, vi, expect, Mock } from 'vitest';
import axios from 'axios';
import { fetchParts } from './utils';

vi.mock('axios');

describe('fetchParts', () => {
  it('should fetch parts successfully', async () => {
    const set_id = '12345';
    const mockResponse = {
      data: {
        results: [
          {
            part: {
              part_num: '001',
              name: 'Part 1',
              part_img_url: 'https://example.com/part1.jpg',
            },
          },
          {
            part: {
              part_num: '002',
              name: 'Part 2',
              part_img_url: null,
            },
          },
        ],
      },
    };

    (axios.get as Mock).mockResolvedValue(mockResponse);

    const result = await fetchParts(set_id);

    expect(axios.get).toHaveBeenCalledWith(
      `https://rebrickable.com/api/v3/lego/minifigs/${set_id}/parts/?key=${import.meta.env.VITE_REBRICKABLE_API_KEY}`,
    );
    expect(result).toEqual([
      {
        id: '001',
        name: 'Part 1',
        picture: 'https://example.com/part1.jpg',
      },
      {
        id: '002',
        name: 'Part 2',
        picture: null,
      },
    ]);
  });

  it('should handle fetch error', async () => {
    const set_id = '12345';

    (axios.get as Mock).mockRejectedValue(new Error('Fetch error'));

    const result = await fetchParts(set_id);

    expect(axios.get).toHaveBeenCalledWith(
      `https://rebrickable.com/api/v3/lego/minifigs/${set_id}/parts/?key=${import.meta.env.VITE_REBRICKABLE_API_KEY}`,
    );
    expect(result).toEqual([]);
  });
});
