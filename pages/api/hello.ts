// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { mock, Random } from 'mockjs';

type Data = {
  name: string,
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(
    mock({
      // 'name|1': ['张三', '李四', '王五'],
      'list|1-10': [
        {
          'name|1': [Random.cname(), Random.cname(), Random.cname()],
          birthday: Random.date(),
          'sex|1': ['男', '女'],
          address: Random.county(true),
        },
      ],
    })
  );
}
